const baseConfig = require('./webpack.base.config.js')

baseConfig.target = 'electron-renderer'
baseConfig.entry = {
    renderer: './src/renderer.js',
}
baseConfig.output.libraryTarget = 'module'
baseConfig.output.chunkFormat = 'module'
baseConfig.experiments.outputModule = true

module.exports = baseConfig