import React from "react";

import { ThemeProvider } from "styled-components";
import { Theme } from "src/design/theme";
import GlobalStyle from "src/design/globalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={Theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default Provider;