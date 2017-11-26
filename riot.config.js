export default {
    from: 'src/riot-tags',
    to: 'src/riot-tags/riot-tags.js',
    template: '', // html parser
    style: 'postcss', // css parser
    type: '', // js parser
    parsers: {
        html: {
            foo: (html, opts, url) => parseHTML(html),
        },
        css: {
            postcss: (tagName, css, opts, url) => parseCSS(css),
        },
        js: {
            bar: (js, opts, url) => parseJS(js), // no js parser, riot first then uglify on packaged tags.js
        },
    },
    // special options that may be used to extend
    // the default riot parsers options
    parserOptions: {
        js: {},
        template: {},
        style: {}
    }
}

function parseCSS(css) {
    const postcss = require('postcss')
    const autoprefixer = require('autoprefixer')
    const cssnano = require('cssnano')

    const result = postcss([
        autoprefixer({
            cascade: false
        }),
        cssnano({
            preset: 'default',
            svgo: false
        })
    ]).process(css).css

    return result
}