import webpack from 'webpack';

export function buildFileLoader():webpack.RuleSetRule {
    return {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
}
