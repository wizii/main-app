/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');
const deps = require("./package.json").dependencies;

const NextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mainApp',
        remotes: {
          mainApp: `mainApp@http://localhost:3000/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/primaryEntry.js`,
          employees: `employees@http://localhost:3001/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/primaryEntry.js`,
        },
        filename:'static/chunks/primaryEntry.js',
        exposes: {
          './Store': './src/store.tsx'
        },
        // shared: {
        //   ...deps,
        //   react: {
        //     singleton: true,
        //     eager: true,
        //     requiredVersion: deps.react,
        //   },
        //   "react-dom": {
        //     singleton: true,
        //     eager: true,
        //     requiredVersion: deps["react-dom"],
        //   },
        // },
      }),
    );
    return config;
  }
};

module.exports = NextConfig;
