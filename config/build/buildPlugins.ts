import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

/**
 handler for detailed information about each step of build
 */
// const handler = (percentage: number, message: string, ...args: any[]) => {
//     // e.g. Output each progress message directly to the console:
//     console.info(percentage, message, ...args);
// };

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [new HtmlWebpackPlugin({
        template: paths.html
    }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[id].[contenthash:8].css"
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev
        }),
        new ReactRefreshWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}