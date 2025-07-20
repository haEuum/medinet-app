import palette from './palette';

const sementic = {
    // Primary
    Primary: {
        Normal: palette.Blue['20'],
        Alternative: '#385C7A',
        Assistive: '#61778A',
    },

    // Secondary
    Secondary: {
        Normal: '#BFC1C1',
        Alternative: '#D1D4D5',
        Assistive: '#ECF0F1',
    },

    // Label
    Label: {
        Normal: palette.Neutral['5'],
        Strong: palette.Common['100'],
        Neutral: palette.Neutral['25'],
        Alternative: palette.Neutral['40'],
        Assistive: palette.Neutral['50'],
        Disable: palette.Neutral['97'],
    },

    // Line
    Line: {
        Normal: palette.Neutral['90'],
        Neutral: palette.Neutral['95'],
        Alternative: palette.Neutral['97'],
    },

    // Fill
    Fill: {
        Normal: palette.Neutral['97'],
        Neutral: palette.Neutral['95'],
        Alternative: palette.Neutral['90'],
        Support: palette.Common['0'],
        Assistive: palette.Common['0'],
    },

    // Background
    Background: {
        Normal: palette.Common['0'],
        Neutral: palette.Neutral['99'],
        Alternative: palette.Neutral['99'],
    },

    // Status
    Status: {
        Negative: palette.Red['50'],
        Cautionary: palette.Yellow['50'],
        Positive: palette.Green['50'],
        Info: palette.Blue['50'],
    },

    // Static
    Static: {
        White: palette.Common['0'],
        Black: palette.Common['100'],
    },
};

export default sementic;