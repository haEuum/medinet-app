import React from "react";
import styled from "styled-components/native";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

const Container = styled.View`
    display: flex;
    flex: 1 0 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`;

export default Layout;