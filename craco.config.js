const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        jsConfigPath: "./jsconfig.paths.json",
      },
    },
  ],
};
