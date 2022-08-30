module.exports = {

    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },

    //Enviromen Mode
    mode: process.env.NODE_ENV || 'development'
}