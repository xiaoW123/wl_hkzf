const CracoLessPlugin = require("craco-less")
const path = require('path')
const resolve = pathname => {
  return path.resolve(__dirname, pathname)
}

module.exports = {
  // less
  plugins: [  // 插件
    {
      plugin: CracoLessPlugin
    }
  ],
  //webpack
  webpack: {
    alias: { // 配置路径别名
      "@": resolve("src"),
      "component": resolve("src/component"),
      "utils": resolve("src/utils")
    }
  }
}
