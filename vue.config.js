module.exports = {
  devServer: {
    port: 8085, // 端口
    proxy: {
      '/api': {
        target: 'https://lab.isaaclin.cn/nCoV/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    }
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
