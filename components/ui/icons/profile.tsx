import React from 'react';
import { SvgProps } from 'react-native-svg';
import Profile from 'src/assets/icons/profile.svg';

const ProfileIcon = (props: SvgProps) => {
    return <Profile width={24} height={24} {...props} />;
};

export default ProfileIcon;