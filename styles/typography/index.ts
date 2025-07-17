import size from './size';
import weight from './weight';

const makeStyle = (fontSize: number, fontFamily: string) => ({
    fontSize,
    lineHeight: Math.round(fontSize * 1.3),
    fontFamily,
});

const typography = {
    // Display1
    Display1Bold: makeStyle(size.Display1, weight.Bold),
    Display1Medium: makeStyle(size.Display1, weight.Medium),
    Display1Regular: makeStyle(size.Display1, weight.Regular),

    // Display2
    Display2Bold: makeStyle(size.Display2, weight.Bold),
    Display2Medium: makeStyle(size.Display2, weight.Medium),
    Display2Regular: makeStyle(size.Display2, weight.Regular),

    // Title1
    Title1Bold: makeStyle(size.Title1, weight.Bold),
    Title1Medium: makeStyle(size.Title1, weight.Medium),
    Title1Regular: makeStyle(size.Title1, weight.Regular),

    // Title2
    Title2Bold: makeStyle(size.Title2, weight.Bold),
    Title2Medium: makeStyle(size.Title2, weight.Medium),
    Title2Regular: makeStyle(size.Title2, weight.Regular),

    // Headline1
    Headline1Bold: makeStyle(size.Headline1, weight.Bold),
    Headline1Medium: makeStyle(size.Headline1, weight.Medium),
    Headline1Regular: makeStyle(size.Headline1, weight.Regular),

    // Headline2
    Headline2Bold: makeStyle(size.Headline2, weight.Bold),
    Headline2Medium: makeStyle(size.Headline2, weight.Medium),
    Headline2Regular: makeStyle(size.Headline2, weight.Regular),

    // Body
    BodyBold: makeStyle(size.Body, weight.Bold),
    BodyMedium: makeStyle(size.Body, weight.Medium),
    BodyRegular: makeStyle(size.Body, weight.Regular),

    // Label
    LabelBold: makeStyle(size.Label, weight.Bold),
    LabelMedium: makeStyle(size.Label, weight.Medium),
    LabelRegular: makeStyle(size.Label, weight.Regular),

    // Caption
    CaptionBold: makeStyle(size.Caption, weight.Bold),
    CaptionMedium: makeStyle(size.Caption, weight.Medium),
    CaptionRegular: makeStyle(size.Caption, weight.Regular),
};

export default typography;