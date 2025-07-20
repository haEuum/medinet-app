import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
    base: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "$radiusMedium",
    },

    ExtraLarge: {
        height: 60,
        paddingHorizontal: 24,
        borderRadius: "$radiusExtraLarge",
    },
    Large: {
        height: 52,
        paddingHorizontal: 20,
        borderRadius: "$radiusLarge",
    },
    Medium: {
        height: 44,
        paddingHorizontal: 16,
        borderRadius: "$radiusMedium",
    },
    Small: {
        height: 36,
        paddingHorizontal: 12,
        borderRadius: "$radiusSmall",
    },

    // 상태별
    enabled: {
        backgroundColor: "$primaryNormal",
    },
    disabled: {
        backgroundColor: "$secondaryNormal",
    },

    // 텍스트
    text: {
        ...EStyleSheet.value("$bodyMedium"),
    },
    textEnabled: {
        color: "$staticWhite",
    },
    textDisabled: {
        color: "$labelNormal",
    },
});