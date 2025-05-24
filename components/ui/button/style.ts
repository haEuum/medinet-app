import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    base: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '$RadiusMedium',
    },

    // 사이즈별 (높이 + 패딩까지 정확하게 분리)
    ExtraLarge: {
        height: 60,
        paddingHorizontal: 24,
        borderRadius: '$RadiusExtraLarge',
    },
    Large: {
        height: 52,
        paddingHorizontal: 20,
        borderRadius: '$RadiusLarge',
    },
    Medium: {
        height: 44,
        paddingHorizontal: 16,
        borderRadius: '$RadiusMedium',
    },
    Small: {
        height: 36,
        paddingHorizontal: 12,
        borderRadius: '$RadiusSmall',
    },

    // 상태별
    enabled: {
        backgroundColor: '$PrimaryNormal',
    },
    disabled: {
        backgroundColor: '$SecondaryNormal',
    },

    // 텍스트
    text: {
        ...EStyleSheet.value("$BodyMedium"),
    },
    textEnabled: {
        color: '$StaticWhite',
    },
    textDisabled: {
        color: '$LabelAssistive',
    },
});