const autoprefixer = require('autoprefixer')
const sortMediaQueries = require('postcss-sort-media-queries')
// const remover = require('postcss-remove-unused-css')
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

module.exports = {
    plugins: [
        sortMediaQueries({
            sort: 'mobile-first',
        }),
        isProd &&
            autoprefixer({
                Browserslist: {
                    config: ['ie >= 11', 'chrome >= 30', 'iOS >= 8', 'Android >= 4'],
                },
            }),

        // isProd &&
        //     remover({
        //         path: './src',
        //         exts: ['.js', '.html', '.vue'],
        //     }),
    ],
    sourceMap: true,
}
