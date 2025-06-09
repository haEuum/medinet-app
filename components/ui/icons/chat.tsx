import React from 'react';
import { SvgProps } from 'react-native-svg';
import Chat from 'src/assets/icons/chat.svg';

const ChatIcon = (props: SvgProps) => {
    return <Chat width={24} height={24} {...props} />;
};

export default ChatIcon;