/**
 * @file Vue-Cli 3.0 配置，参考：https://cli.vuejs.org/zh/config/
 */
const mockMiddleware = require('./mockMiddleware');
module.exports = {
    configureWebpack: {
        devtool: '',
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    },
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: true,
    devServer: {
        port: 9999,
        host: '0.0.0.0',
        https: false,
        open: false,
        // proxy: {
        //     '/crm/web': {
        //         target: 'http://10.100.73.138:8081', // RD联调的时候 用这个
        //         ws: false,
        //         changeOrigin: true
        //     }
        // },
        after(app) {
            app.use(mockMiddleware); // 联调的时候注释这个
        }
    }
};