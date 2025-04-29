export function ColorUtil(
    obj: Record<string, any>,
    prefix = '',
    result: Record<string, string> = {}
): Record<string, string> {
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        const value = obj[key];
        const newKey = prefix ? `${prefix}${capitalize(key)}` : capitalize(key);

        if (typeof value === 'object' && value !== null) {
            ColorUtil(value, newKey, result);
        } else {
            result[`$${newKey}`] = value;
        }
    }
    return result;
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}