import palette from './palette';
import sementic from './sementic';
import {colorUtil} from "src/utils/theme/flat";

const flatSementic = colorUtil(sementic);

const color = {
    ...palette.Common,
    ...colorUtil(palette.Neutral, 'neutral'),
    ...colorUtil(palette.Red, 'red'),
    ...colorUtil(palette.Orange, 'orange'),
    ...colorUtil(palette.Yellow, 'yellow'),
    ...colorUtil(palette.Green, 'green'),
    ...colorUtil(palette.Blue, 'blue'),
    ...colorUtil(palette.Purple, 'purple'),
    ...flatSementic,
};

export default color;