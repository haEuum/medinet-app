import EStyleSheet from "react-native-extended-stylesheet";
import typography from "src/styles/typography";
import sementic from "src/styles/color/sementic";

export const styles = EStyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: sementic.Background.Normal,
        justifyContent: "center",
        alignItems: "center",
    },
    space: {
        height: 40,
    },
    inputContainer: {
        width: "90%",
        gap: 10,
    },
    buttonContainer: {
        marginTop: 20,
        width: "90%",
    },
    signupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        gap: 5,
    },
    signupText: {
        ...typography.BodyRegular,
        color: sementic.Label.Normal,
    },
    signupLink: {
        ...typography.BodyBold,
        color: sementic.Primary.Alternative,
    },
});