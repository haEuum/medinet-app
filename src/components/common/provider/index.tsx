import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import {theme} from "src/styles/theme";
import {Props} from "./type";
import {ThemeProvider} from "react-native-ficus-ui";

const queryClient = new QueryClient();

const Provider = ({children}: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                {children}
                <Toast/>
            </QueryClientProvider>

        </ThemeProvider>
    );
};

export default Provider;