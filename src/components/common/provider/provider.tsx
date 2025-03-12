import { ThemeProvider } from "styled-components";
import { Theme } from "src/style/theme";
import GlobalStyle from "src/style/globalStyle.ts";
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