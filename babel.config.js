module.exports = function (api) {
    api.cache(true);

    return {
        presets: ['@react-native/babel-preset'],
        plugins: [
            [
                "module:react-native-dotenv",
                {
                    moduleName: "@env",
                    path: ".env",
                    allowUndefined: false,
                },
            ],
            "@babel/plugin-transform-runtime",
            [
                "module-resolver",
                {
                    alias: {
                        "src": "./src"
                    }
                }
            ],
            process.env.NODE_ENV === "production" ? "transform-remove-console" : null,
        ].filter(Boolean)
    };
};
