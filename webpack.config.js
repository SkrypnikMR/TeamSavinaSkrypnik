const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = [
    {
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
    },
];
const getFileLoader = regExp => ({
    test: regExp,
    use: ['file-loader'],
});
const getStyleLoader = (regExp, additionalLoaders) => {
    const rules = {
        test: regExp,
        use: ['style-loader', 'css-loader'],
    };
    if (additionalLoaders && additionalLoaders.length) {
        additionalLoaders.forEach(loader => rules.use.push(loader));
    }
    return rules;
};
const getPath = url => path.resolve(__dirname, `src/${url}`);

module.exports = {
    entry: {
        bundle: getPath('index.js'),
    },
    resolve: {
        alias: {
            js: path.resolve(__dirname, './src'),
            jsx: path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
    },
    module: {
        rules: [
            getStyleLoader(/\.css$/),
            getFileLoader(/\.(ttf|woff|eot)$/),
            getFileLoader(/\.(jpg|jpeg|svg|png)$/),
            getStyleLoader(/\.s[ac]ss$/, ['sass-loader']),
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        ...pages.map(config => new HTMLWebpackPlugin(config)),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/assets/images'),
                    to: path.resolve(__dirname, 'dist/public/assets/images'),
                },
            ],
        }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        port: 7777,
        historyApiFallback: true,
        contentBase: './',
        hot: true,
    },
};
