module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: 3,
                polyfills: ['es.promise', 'es.symbol'],
                targets: {
                    esmodules: true,
                },
            },
        ],
    ],
}
