const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8080',
    port: process.env.VUE_APP_PORT || 3000
  }
})
