import React from 'react';
import { SvgProps } from 'react-native-svg';
import Main from 'src/assets/icons/main.svg';

const MainIcon = (props: SvgProps) => {
    return <Main width={30} height={30} {...props} />;
};

export default MainIcon;