module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    // open: true, // 配置自动启动浏览器
    hotOnly: true, // 热更新
    // 配置跨域处理, 两个代理
    proxy: {
      "/api": {
        target: "https://e1v-h.phncdn.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
