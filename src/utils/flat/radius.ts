export function RadiusUtil(
    obj: Record<string, any>,
    result: Record<string, any> = {}
): Record<string, any> {
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        result[`$Border${key}`] = obj[key];
    }
    return result;
}