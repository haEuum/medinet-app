import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './style';
import { TextFieldProps } from 'src/types/ui/textField/textField.type';
import PretendardText from 'src/components/fonts/pretendard';
import sementic from "src/styles/color/sementic";

const TextField = ({
                        type,
                        align = 'left',
                        label,
                        placeholder,
                        value,
                        onChangeText,
                        keyboardType,
                    }: TextFieldProps) => {
    return (
        <View style={styles.inputContainer}>
            {label && (
                <PretendardText style={styles.label}>
                    {label}
                </PretendardText>
            )}
            <TextInput
                style={[
                    styles.input,
                    align === 'center' && styles.centerAlign,
                    align === 'title-left' && styles.titleLeftMargin,
                ]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={sementic.Label.Assistive}
                keyboardType={keyboardType || (type === 'phone' ? 'phone-pad' : 'default')}
                secureTextEntry={type === 'password'}
                textAlign={align === 'center' ? 'center' : 'left'}
            />
        </View>
    );
};

export default TextField;