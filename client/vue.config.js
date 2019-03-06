// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/variables.scss";`
      }
    }
  },
  runtimeCompiler: true
};
