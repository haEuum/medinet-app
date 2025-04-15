export function colorUtil(
    obj: Record<string, any>,
    prefix = '',
    result: Record<string, string> = {}
): Record<string, string> {
    for (const key in obj) {
        const value = obj[key];
        const newKey = prefix ? `${prefix}${capitalize(key)}` : key;

        if (typeof value === 'object' && value !== null) {
            colorUtil(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    }
    return result;
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}