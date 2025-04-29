import EStyleSheet from 'react-native-extended-stylesheet';
import typography from "src/styles/typography";

export function TypographyUtil(
    obj: Record<string, { fontSize: number; lineHeight: number; fontFamily: string }>,
    result: Record<string, any> = {}
): Record<string, any> {
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        result[`$${key}`] = {
            fontSize: obj[key].fontSize,
            lineHeight: obj[key].lineHeight,
            fontFamily: obj[key].fontFamily,
        };
    }
    return result;
}

EStyleSheet.build({
    ...TypographyUtil(typography),
});