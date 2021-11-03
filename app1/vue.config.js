const name = "app1";

const port = 7001;
const dev = process.env.NODE_ENV === "development";
module.exports = {
  publicPath: dev ? `//localhost:${port}` : "/",
  devServer: {
    port,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
