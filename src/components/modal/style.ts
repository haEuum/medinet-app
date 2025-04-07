import { StyleSheet } from "react-native";
import { Palette, Semantic } from "src/design/theme/color";
import { Shape } from "src/design/theme/shape";

export const styles = StyleSheet.create({
    modalContainer: {
        display: "flex",
        width: "100%",
        height: 300,
        paddingTop: 8,
        paddingRight: 24,
        paddingLeft: 24,
        flexDirection: "column",
        alignItems: "center",
        gap: 32,
        zIndex: 999,
        backgroundColor:"white",
        borderRadius: Shape.Small,
    },
    topButton: {
        width: 48,
        height: 4,
        borderRadius: Shape.ExtraSmall,
        backgroundColor: Semantic.Fill.AlterNative,
    },
    contentContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
        alignSelf: "stretch",
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 5,
        alignSelf: "stretch",
    },
    subtitleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 10,
        alignSelf: "stretch",
    },
    buttonContainer: {
        justifyContent: "center",
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 20,
        alignSelf: "stretch",
        flexDirection: "row",
    },
    subtitle: {
        color: Palette.Red[50]
    },
    fieldText: {
        color: Semantic.Label.AlterNative
    },
});
