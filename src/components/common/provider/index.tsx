import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EStyleSheet from "react-native-extended-stylesheet";
import sementic from "src/styles/color/sementic";
import { colorUtil } from "src/utils/styles/colorUtil";
import { typographyUtil } from "src/utils/styles/typographyUtil";
import elevation from "src/styles/elevation";
import radius from "src/styles/radius";
import typography from "src/styles/typography";
import Toast from "react-native-toast-message";
import { Props } from "./type";

const queryClient = new QueryClient();

EStyleSheet.build({
    $rem: 1,
    ...colorUtil(sementic),
    ...typographyUtil(typography),
    $elevation1: elevation.elevation1,
    $elevation2: elevation.elevation2,
    $elevation3: elevation.elevation3,
    $radiusFull: radius.full,
    $radiusExtraLarge: radius.extraLarge,
    $radiusLarge: radius.large,
    $radiusMedium: radius.medium,
    $radiusSmall: radius.small,
    $radiusExtraSmall: radius.extraSmall,
});

const Provider = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Toast />
            {children}
        </QueryClientProvider>
    );
};

export default Provider;