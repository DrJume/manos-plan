// postcss-cli configuration to manually cssnano (e.g spinner.css)
module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'default',
        }),
    ],
}