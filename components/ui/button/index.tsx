import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

interface ButtonProps {
    text: string;
    size?: 'ExtraLarge' | 'Large' | 'Medium' | 'Small';
    disabled?: boolean;
    onPress?: () => void;
}

const Button = ({ text, size = 'Medium', disabled = false, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.base,
                styles[size],
                disabled ? styles.disabled : styles.enabled,
            ]}
            activeOpacity={0.8}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={[
                styles.text,
                disabled ? styles.textDisabled : styles.textEnabled,
            ]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;