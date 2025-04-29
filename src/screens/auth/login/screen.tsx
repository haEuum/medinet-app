import Logo from "src/assets/images/logo.svg";
import Layout from "src/components/common/layout";
import "./style";
import TextField from "src/components/ui/textField";
import {View} from "react-native";

const Login = () => {
    return (
        <Layout>
            <Logo/>
            <View>
                <TextField
                    label="전화번호"
                    align="title-left"
                    placeholder="전화번호를 입력해주세요."
                />
            </View>
        </Layout>
    )
}

export default Login;