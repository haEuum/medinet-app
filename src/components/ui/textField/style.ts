import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    inputContainer: {
        width: '100%',
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    label: {
        ...EStyleSheet.value("$BodyMedium"),
        color: '$LabelNormal',
    },
    input: {
        width: '100%',
        padding: 15,
        borderRadius: '$RadiusExtraLarge',
        backgroundColor: '$FillAssistive',
        ...EStyleSheet.value("$elevation1"),
    },
    centerAlign: {
        textAlign: 'center',
    },
    titleLeftMargin: {
        marginTop: 5,
    },
});