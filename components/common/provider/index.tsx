import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import {Props} from "./type";

const queryClient = new QueryClient();

const Provider = ({children}: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toast/>
        </QueryClientProvider>
    );
};

export default Provider;