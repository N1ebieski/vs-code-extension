import * as vscode from "vscode";
import { GeneratedConfigKey } from "./generated-config";

type ConfigKey =
    | GeneratedConfigKey
    | "basePath"
    | "phpEnvironment"
    | "phpCommand"
    | "tests.docker.enabled"
    | "tests.ssh.enabled"
    | "tests.suiteSuffix"
    | "showErrorPopups"
    | "blade.autoSpaceTags"
    | "eloquent.generateDocBlocks";

export const config = <T>(key: ConfigKey, fallback: T): T =>
    vscode.workspace.getConfiguration("Laravel").get<T>(key, fallback);

export const configKey = <T>(key: ConfigKey): string => `Laravel.${key}`;

export const configAffected = (
    event: vscode.ConfigurationChangeEvent,
    ...keys: ConfigKey[]
): boolean => keys.some((key) => event.affectsConfiguration(configKey(key)));

export type PhpEnvironment =
    | "auto"
    | "herd"
    | "valet"
    | "sail"
    | "local"
    | "lando";
