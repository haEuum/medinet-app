import palette from './palette';

const sementic = {
    // Primary
    primary: {
        normal: palette.Blue[20],
        alternative: '#385C7A',
        assistive: '#61778A',
    },

    // Secondary
    secondary: {
        normal: '#BFC1C1',
        alternative: '#D1D4D5',
        assistive: '#ECF0F1',
    },

    // Label
    label: {
        normal: palette.Neutral[5],
        strong: palette.Common[100],
        neutral: palette.Neutral[25],
        alternative: palette.Neutral[40],
        assistive: palette.Neutral[50],
        disable: palette.Neutral[97],
    },

    // Line
    line: {
        normal: palette.Neutral[90],
        neutral: palette.Neutral[95],
        alternative: palette.Neutral[97],
    },

    // Fill
    fill: {
        normal: palette.Neutral[97],
        neutral: palette.Neutral[95],
        alternative: palette.Neutral[90],
        support: palette.Common[0],
        assistive: palette.Common[0],
    },

    // Background
    background: {
        normal: palette.Common[0],
        neutral: palette.Neutral[99],
        alternative: palette.Neutral[99],
    },

    // Status
    status: {
        negative: palette.Red[50],
        cautionary: palette.Yellow[50],
        positive: palette.Green[50],
        info: palette.Blue[50],
    },

    // Static
    static: {
        white: palette.Common[0],
        black: palette.Common[100],
    },
};

export default sementic;