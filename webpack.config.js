const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "react-mf-app-sass",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {},
      shared: {
        react: {
          requiredVersion: deps.react,
          singleton: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};
