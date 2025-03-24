import React from "react";

import {ThemeProvider} from "styled-components/native";
import {Theme} from "src/design/theme";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import styled from "styled-components/native";

const queryClient = new QueryClient();

const GlobalWrapper = styled.View`
    flex: 1;
    margin: 0;
    padding: 0;
    background-color: ${({theme}) => theme.Semantic.Fill.Assistive};
`;

const Provider = ({children}: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={Theme}>
                <GlobalWrapper>{children}</GlobalWrapper>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default Provider;