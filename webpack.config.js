const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

var path = require('path')

module.exports = {
    entry: ['./src/index'], // 在 index 檔案後的 .js 副檔名是可選的
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        //...
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, './public', 'mockServiceWorker.js'), to: 'mockServiceWorker.js' },
        ]),
        new WorkboxPlugin.GenerateSW(),
    ]
}