import EStyleSheet from 'react-native-extended-stylesheet';
import typography from "src/styles/typography";
import elevation from "src/styles/elevation";
import sementic from "src/styles/color/sementic";
import radius from "src/styles/radius";

export const styles = EStyleSheet.create({
    inputContainer: {
        width: '100%',
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    label: {
        ...typography.BodyMedium,
        color: sementic.Label.Normal
    },
    input: {
        width: '100%',
        padding: 15,
        borderRadius: radius.ExtraLarge,
        backgroundColor: sementic.Fill.Assistive,
        ...elevation.elevation1,
    },
    centerAlign: {
        textAlign: 'center',
    },
    titleLeftMargin: {
        marginTop: 5,
    },
});