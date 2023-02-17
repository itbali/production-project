import webpack from 'webpack';

export function buildBabelLoader():webpack.RuleSetRule {
    return  {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract', {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true,
                    }],
                ],
            },
        },

    };
}
