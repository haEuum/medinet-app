import palette from './color/palette';
import sementic from './color/sementic';
import typography from './typography';
import elevation from './elevation';
import radius from './radius';
import { ColorUtil } from 'src/utils/flat/color';
import { TypographyUtil } from 'src/utils/flat/typography';
import { ElevationUtil } from 'src/utils/flat/elevation';
import { RadiusUtil } from 'src/utils/flat/radius';

export const EStyleConfig = {
    ...ColorUtil(palette),
    ...ColorUtil(sementic),
    ...TypographyUtil(typography),
    ...ElevationUtil(elevation),
    ...RadiusUtil(radius),
};