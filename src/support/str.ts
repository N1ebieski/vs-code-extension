export const lcfirst = (str: string): string => {
    return str.charAt(0).toLowerCase() + str.slice(1);
};

export const kebab = (str: string): string =>
    str
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
