import path from "path"
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPath} from "./config/build/types/config";

export default (env: BuildEnv) => {

    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        build: path.resolve(__dirname, 'build'),
    }

    const mode = env.mode || 'development';
    const PORT = env.port || 3000

    const isDev = mode === 'development';

    return buildWebpackConfig({mode, paths, isDev, port: PORT})
}