module.exports = {
    devServer: {
        open: true
    },
    productionSourceMap: false,
    chainWebpack: config => {
        config.module.rule('less').oneOf('normal').test(/\.less$/).include.add(/src/).end()
            .use('css-loader').tap(options => {
                options.modules = true;
                options.localIdentName = '[name]_[local]_[hash:base64:5]';
                return options
            });
        config.module.rule('less').oneOf('antd-less').test(/\.less$/).exclude.add(/src/).end()
            .use('vue-style-loader').loader('vue-style-loader').options({
                sourceMap: false,
                shadowMode: false
            }).end()
            .use('css-loader').loader('css-loader').options({
                sourceMap: false,
                importLoaders: 2
            }).end()
            .use('postcss-loader').loader('postcss-loader').options({
                sourceMap: false
            }).end()
            .use('less-loader').loader('less-loader').options({
                sourceMap: false,
                modifyVars: {
                    "primary-color": "#1DA57A"
                },
                javascriptEnabled: true
            })
    }
}