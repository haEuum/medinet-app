import EStyleSheet from 'react-native-extended-stylesheet';
import typography from "src/styles/typography";
import radius from "src/styles/radius";
import sementic from "src/styles/color/sementic";

export const styles = EStyleSheet.create({
    base: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius.Medium,
    },

    ExtraLarge: {
        height: 60,
        paddingHorizontal: 24,
        borderRadius: radius.ExtraLarge,
    },
    Large: {
        height: 52,
        paddingHorizontal: 20,
        borderRadius: radius.Large,
    },
    Medium: {
        height: 44,
        paddingHorizontal: 16,
        borderRadius: radius.Medium,
    },
    Small: {
        height: 36,
        paddingHorizontal: 12,
        borderRadius: radius.Small,
    },

    // 상태별
    enabled: {
        backgroundColor: sementic.Primary.Normal,
    },
    disabled: {
        backgroundColor: sementic.Secondary.Normal,
    },

    // 텍스트
    text: {
        ...typography.BodyMedium
    },
    textEnabled: {
        color: sementic.Static.White,
    },
    textDisabled: {
        color: sementic.Label.Normal,
    },
});