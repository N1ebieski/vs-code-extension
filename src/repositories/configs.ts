import { repository } from ".";
import { Config } from "..";
import { runInLaravel, template } from "../support/php";

interface ConfigGroupResult {
    configs: Config[];
    paths: string[];
}

export const getConfigByName = (name: string): Config | undefined => {
    return getConfigs().items.configs.find((item) => item.name === name);
};

export const getConfigPathByName = (match: string): string | undefined => {
    const fileName = match.replace(/\.[^.]+$/, '');

    return getConfigs().items.paths.find((path) => {
        return !path.startsWith('vendor/') && path.endsWith(`${fileName}.php`);
    });
};

export const getConfigs = repository<ConfigGroupResult>({
    load: () => {
        return runInLaravel<Config[]>(template("configs"), "Configs").then(
            (result) => {
                return {
                    configs: result.map((item) => {
                        return {
                            name: item.name,
                            value: item.value,
                            file: item.file,
                            line: item.line,
                        };
                    }),
                    paths: [...new Set(result.map(item => item.file))]
                } as ConfigGroupResult;
            }
        );
    },
    pattern: ["config/{,*,**/*}.php", ".env"],
    itemsDefault: {
        configs: [],
        paths: [],
    },
});
