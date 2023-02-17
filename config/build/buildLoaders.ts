import webpack from 'webpack';
import { buildScssLoader } from './loaders/scssLoader';
import { buildFileLoader } from './loaders/fileLoader';
import { buildSvgLoader } from './loaders/svgLoader';
import { buildTypescriptLoader } from './loaders/typescriptLoader';
import { buildBabelLoader } from './loaders/babelLoader';

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
    const fileLoader = buildFileLoader()
    const svgLoader= buildSvgLoader()
    const scssLoader = buildScssLoader(isDev);
    const typescriptLoader= buildTypescriptLoader();
    const babelLoader = buildBabelLoader()

    return [
        babelLoader,
        typescriptLoader,
        scssLoader,
        svgLoader,
        fileLoader,
    ];
}
