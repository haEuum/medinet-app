const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// svg 설정 추가
const { assetExts, sourceExts } = config.resolver;

config.resolver.assetExts = assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts = [...sourceExts, 'svg', 'cjs'];

config.resolver.alias = {
    src: './src',
};

// transformer 설정 추가
config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

module.exports = config;