import color from "src/styles/color";
import typography from "src/styles/typography";
import {borderRadius} from "src/styles/radius";
import {shadow} from "src/styles/shadow";

module.exports = {
    presets: [require('react-native-ficus-ui/preset')],
    content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: color,
            fontSize: typography,
            borderRadius: borderRadius,
            boxshadow: shadow,
        },
    },
    plugins: [],
};