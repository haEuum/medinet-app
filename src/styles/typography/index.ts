const fontWeight = {
    Bold: "Pretendard-Bold",
    Medium: "Pretendard-Medium",
    Regular: "Pretendard-Regular",
};

const fontSize = {
    Display1: 36,
    Display2: 32,
    Title1: 28,
    Title2: 24,
    Headline1: 20,
    Headline2: 18,
    Body: 16,
    Label: 14,
    Caption: 12,
};

const makeStyle = (fontSize: number, fontFamily: string) => ({
    fontSize,
    lineHeight: Math.round(fontSize * 1.3),
    fontFamily,
});

const typography = {
    Display1Bold: makeStyle(fontSize.Display1, fontWeight.Bold),
    Display1Medium: makeStyle(fontSize.Display1, fontWeight.Medium),
    Display1Regular: makeStyle(fontSize.Display1, fontWeight.Regular),

    Display2Bold: makeStyle(fontSize.Display2, fontWeight.Bold),
    Display2Medium: makeStyle(fontSize.Display2, fontWeight.Medium),
    Display2Regular: makeStyle(fontSize.Display2, fontWeight.Regular),

    Title1Bold: makeStyle(fontSize.Title1, fontWeight.Bold),
    Title1Medium: makeStyle(fontSize.Title1, fontWeight.Medium),
    Title1Regular: makeStyle(fontSize.Title1, fontWeight.Regular),

    Title2Bold: makeStyle(fontSize.Title2, fontWeight.Bold),
    Title2Medium: makeStyle(fontSize.Title2, fontWeight.Medium),
    Title2Regular: makeStyle(fontSize.Title2, fontWeight.Regular),

    Headline1Bold: makeStyle(fontSize.Headline1, fontWeight.Bold),
    Headline1Medium: makeStyle(fontSize.Headline1, fontWeight.Medium),
    Headline1Regular: makeStyle(fontSize.Headline1, fontWeight.Regular),

    Headline2Bold: makeStyle(fontSize.Headline2, fontWeight.Bold),
    Headline2Medium: makeStyle(fontSize.Headline2, fontWeight.Medium),
    Headline2Regular: makeStyle(fontSize.Headline2, fontWeight.Regular),

    BodyBold: makeStyle(fontSize.Body, fontWeight.Bold),
    BodyMedium: makeStyle(fontSize.Body, fontWeight.Medium),
    BodyRegular: makeStyle(fontSize.Body, fontWeight.Regular),

    LabelBold: makeStyle(fontSize.Label, fontWeight.Bold),
    LabelMedium: makeStyle(fontSize.Label, fontWeight.Medium),
    LabelRegular: makeStyle(fontSize.Label, fontWeight.Regular),

    CaptionBold: makeStyle(fontSize.Caption, fontWeight.Bold),
    CaptionMedium: makeStyle(fontSize.Caption, fontWeight.Medium),
    CaptionRegular: makeStyle(fontSize.Caption, fontWeight.Regular),
};

export default typography;