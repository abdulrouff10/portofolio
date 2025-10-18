const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/portofolio/' // ← ini WAJIB agar GitHub Pages bisa akses file dengan path yang benar
})
