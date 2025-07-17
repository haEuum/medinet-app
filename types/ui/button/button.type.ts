export interface ButtonProps {
    text: string;
    size?: 'ExtraLarge' | 'Large' | 'Medium' | 'Small';
    disabled?: boolean;
    onPress?: () => void;
}