const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (argv) => {
    const isProduction = argv.mode === "production";

    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
        module: {
            rules: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', {
                            'plugins': ['@babel/plugin-proposal-class-properties']
                        }]
                    },
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                }]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map'
    }
};

