import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';
import CopyPlugin from 'copy-webpack-plugin';

export function buildPlugins(
    { paths, isDev, api, project }: BuildOptions,
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
            __PROJECT__: JSON.stringify(project),
        }),
        new ReactRefreshWebpackPlugin({ overlay: false }),
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales },
                { from: paths.redirects, to: paths.build },
            ],
            options: {
                concurrency: 100,
            },
        }),
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
