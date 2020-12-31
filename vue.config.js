const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
  devServer: {
    disableHostCheck: true
    // historyApiFallback: true  //配置开发环境支持history模式
    // proxy: {
    //   '/': {
    //     target: 'http://10.12.24.23',
    //     // target: 'http://yapi.rong360.com/mock/720',
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
  },
  chainWebpack: config => {
    config.plugin('StyleLintPlugin').use(StyleLintPlugin, [{
      files: ['src/**/*.vue', 'src/assets/style/*.l?(e|c|s)ss']
      // fix: true
    }])
    // config.module
    //   .rule('eslint')
    //   .use('eslint-loader')
    //   .loader('eslint-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     options.fix = true
    //     return options
    //   })
  }

}
