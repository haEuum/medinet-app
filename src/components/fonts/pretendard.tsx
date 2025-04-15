import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

type FontWeight = 'Bold' | 'Medium' | 'Regular';

type Props = {
    children: React.ReactNode;
    fontSize?: number;
    fontWeight?: FontWeight;
    style?: TextStyle;
};

const Pretendard = ({children, fontSize = 16, fontWeight = 'Medium', style}: Props) => {
    return (
        <Text
            style={[
                {
                    fontFamily: `Pretendard-${fontWeight}`,
                    fontSize,
                },
                style,
            ]}
        >
            {children}
        </Text>
    );
}

export default Pretendard;