import EStyleSheet from 'react-native-extended-stylesheet';
import palette from './color/palette';
import sementic from './color/sementic';
import typography from "src/styles/typography";
import elevation from "src/styles/elevation";
import radius from "src/styles/radius";
import { ColorUtil } from 'src/utils/flat/color';
import {TypographyUtil} from "src/utils/flat/typography";
import {ElevationUtil} from "src/utils/flat/elevation";
import {RadiusUtil} from "src/utils/flat/radius";

EStyleSheet.build({
    ...ColorUtil(palette),
    ...ColorUtil(sementic),
    ...TypographyUtil(typography),
    ...ElevationUtil(elevation),
    ...RadiusUtil(radius),
});