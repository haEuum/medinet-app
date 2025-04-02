import React from 'react';
import useFonts from 'src/hooks/fonts/useFonts';
import {Typography} from "src/design/theme/typography";
import styled from "styled-components/native";

type TypographyVariant = keyof typeof Typography;

type PretendardTextProps = {
    children: React.ReactNode;
    variant?: TypographyVariant;
    style?: any;
} & React.ComponentProps<typeof StyledText>;

const StyledText = styled.Text<{ variant?: TypographyVariant }>`
  ${({ variant }) => variant && Typography[variant]};
`;

const PretendardText = ({ children, variant = 'BodyRegular', style, ...props }: PretendardTextProps) => {
    const fontsLoaded = useFonts();

    if (!fontsLoaded) return <StyledText>Loading Fonts...</StyledText>;

    return (
        <StyledText variant={variant} style={style} {...props}>
            {children}
        </StyledText>
    );
};

export default PretendardText;