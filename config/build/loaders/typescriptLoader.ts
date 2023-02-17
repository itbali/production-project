import webpack from 'webpack';

export function buildTypescriptLoader():webpack.RuleSetRule {
    return {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
}
