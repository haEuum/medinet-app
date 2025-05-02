import { KeyboardTypeOptions } from 'react-native';

export interface TextFieldProps {
    type?: 'password' | 'name' | 'phone';
    align?: 'center' | 'left' | 'title-left';
    label?: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
}