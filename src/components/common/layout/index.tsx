import {View, StyleSheet} from "react-native";
import {Semantic} from "src/design/theme/color";

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: Semantic.Background.AlterNative,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})