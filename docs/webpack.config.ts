import webpack from "webpack";

import * as path from "path";
import { dev, relativeRoute, Router, RelativePath, Router2 } from "./YanLingHui/src/ts/server/devOption";



const config: webpack.Configuration = {
    // devtool: 'source-map',
    entry: Router2,

    output: {
        path: path.resolve(__dirname, RelativePath), //获取当前路径
        filename: "[name].js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['*', '.ts', '.js']
    },

    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};

export default config;
