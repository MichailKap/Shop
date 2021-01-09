module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data:
          `
            @import "@/styles/variables.scss";
            @import "@/styles/main.scss";
            @import "@/styles/mixins.scss";
          `
        }
      }
    },
    publicPath: "/Shop/"
  };