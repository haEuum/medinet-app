import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "$backgroundNormal",
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
        ...EStyleSheet.value("$bodyRegular"),
        color: "$labelNormal",
    },
    signupLink: {
        ...EStyleSheet.value("$bodyBold"),
        color: "$primaryAlternative",
    },
});