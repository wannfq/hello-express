module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
    plugins: [
        [require('@babel/plugin-proposal-decorators').default,
            {
                legacy: true
            }],
        [require('@babel/plugin-proposal-class-properties').default,
            {
                loose: true
            }]
    ],
};
