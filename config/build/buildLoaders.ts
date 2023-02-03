import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const scssLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => Boolean(resourcePath.includes('module')),
                        localIdentName:
                            isDev
                                ? '[path]__[name]___[local]'
                                : '[path]__[name]___[hash:base64:5]',
                    },
                }
            },
            {
                loader: "sass-loader",
                options: {
                    implementation: require("sass"),
                },
            },
        ]
    }

    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        scssLoader,
    ]
}