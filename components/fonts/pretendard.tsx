import React from 'react';
import {Text, TextStyle } from 'react-native';
import Typography from "src/styles/typography";

type TypographyKey = keyof typeof Typography;

type Props = {
    children?: string;
    textStyle?: TypographyKey;
    style?: TextStyle;
};


const Pretendard = ({ children, textStyle = 'BodyMedium', style }: Props) => {
    return (
        <Text style={[Typography[textStyle], style]}>
            {children}
        </Text>
    );
};


export default Pretendard;