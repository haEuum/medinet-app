import { camelCase } from "lodash";
import typography from "src/styles/typography";

export const typographyUtil = (
    obj = typography
): Record<string, any> => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        const base = camelCase(key);
        acc[`$${base}`] = value;
        return acc;
    }, {} as Record<string, any>);
};