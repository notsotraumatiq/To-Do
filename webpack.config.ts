import { config as dotenv } from "dotenv";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import webpackDevServer from "webpack-dev-server";

dotenv();

const isDevelopment = process.env.NODE_ENV !== "production";

const config: webpack.Configuration = {
  entry: [path.join(path.resolve(__dirname, "src"), "index.tsx")],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(__dirname, "src"), "index.html"),
      filename: "index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv().parsed),
    }),
    ...(isDevelopment ? [new ReactRefreshWebpackPlugin()] : []),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              plugins: [
                isDevelopment && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        ],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(woff|woff2|eot|ttf)$/, type: "asset/resource" },
      { test: /\.(png|jpeg|jpg|svg)$/, type: "asset/resource" },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    port: process.env.DEV_PORT || 3000,
    hot: true,
    open: true,
  },
  mode: isDevelopment ? "development" : "production",
};

export default config;
