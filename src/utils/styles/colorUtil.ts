import { camelCase } from 'lodash';

export const colorUtil = (
    obj: Record<string, any>,
    prefix = ''
): Record<string, string> => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        const newKey = prefix ? `${prefix}_${key}` : key;

        if (typeof value === 'object' && value !== null) {
            Object.assign(acc, colorUtil(value, newKey));
        } else {
            const camel = camelCase(newKey);
            acc[`$${camel}`] = value;
        }

        return acc;
    }, {} as Record<string, string>);
};