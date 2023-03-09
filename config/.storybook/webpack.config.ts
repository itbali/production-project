import webpack from 'webpack';
import { BuildPath } from '../build/types/config';
import path from 'path';
import { buildScssLoader } from '../build/loaders/scssLoader';
import { buildSvgLoader } from '../build/loaders/svgLoader';

module.exports = async ({ config } : { config: webpack.Configuration }) => {

    const paths: BuildPath = {
        entry:'',
        src: path.resolve(__dirname, '..','..', 'src'),
        html:'',
        build:'',
    }

    const fileLoaderRule = config.module!.rules!.find(
        // @ts-ignore
        ({ test }: { test:RegExp }) => test && test.test(".svg")
    ) as  webpack.RuleSetRule;
    fileLoaderRule.exclude = /\.svg$/;

    config.resolve!.modules!.push(paths.src)
    config.resolve!.extensions!.push('.tsx', '.ts')
    config.module!.rules!.push(buildSvgLoader())
    config.module!.rules!.push(buildScssLoader(true))
    config.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
    }))
    return config
}
