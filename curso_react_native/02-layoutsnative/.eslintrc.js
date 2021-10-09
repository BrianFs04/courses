module.exports = {
    root: true,
    extends: '@react-native-community',
    rules: {
        'prettier/prettier': [
            'error',
            { endOfLine: 'auto' },
            { usePrettierrc: true },
        ],
        'react-native/no-inline-styles': 0,
    },
};
