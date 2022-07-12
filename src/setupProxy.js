const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth",
    createProxyMiddleware({
      target: "http://135.181.35.61:2112/",
      changeOrigin: true,
    })
  );
};
