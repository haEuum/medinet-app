import React from 'react';
import { SvgProps } from 'react-native-svg';
import Triage from 'src/assets/icons/triage.svg';

const TriageIcon = (props: SvgProps) => {
    return <Triage width={24} height={24} {...props} />;
};

export default TriageIcon;