module.exports = {
  devServer: {
    port: 8085, // 端口
  },
  publicPath:"./",
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'common': '@/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
