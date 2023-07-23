// @type {import('next').NextConfig}
const webpack = require('webpack');

const withTM = require("next-transpile-modules")([
    "@fullcalendar/common",
    "@babel/preset-react",
    "@fullcalendar/common",
    "@fullcalendar/daygrid",
    "@fullcalendar/interaction",
    "@fullcalendar/react",
    "@fullcalendar/timegrid",
]);

module.exports = withTM({
    reactStrictMode: true,
     eslint: {
    ignoreDuringBuilds: true,
  },
});module.exports = {
    webpack: (config, { warnings }) => {
      config.plugins.push(
        new webpack.ContextReplacementPlugin(/.*/, (context) => {
          if (!context.regExp) {
            context.regExp = /^$/;
          }
          return context;
        })
      );
  
      if (warnings) {
        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.NEXT_WEBPACK_SHOW_WARNINGS': JSON.stringify('false'),
          })
        );
      }
  
      return config;
    },
  };
  