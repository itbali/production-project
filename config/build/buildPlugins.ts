import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

/**
 handler for detailed information about each step of build
 */
// const handler = (percentage: number, message: string, ...args: any[]) => {
//     // e.g. Output each progress message directly to the console:
//     console.info(percentage, message, ...args);
// };

export function buildPlugins(
    { paths, isDev, api }: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const plugins: webpack.WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
            new webpack.ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[id].[contenthash:8].css',
            }),
            new webpack.DefinePlugin({
                __IS_DEV__: isDev,
                __API__: JSON.stringify(api),
            }),
            new ReactRefreshWebpackPlugin({ overlay: false }),
    ]
    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new webpack.NoEmitOnErrorsPlugin())
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
        }))
    }

    return plugins;
}
