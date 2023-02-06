import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        preferRelative: true,
        mainFiles: ['index.ts', 'index.tsx', 'index.js', 'index.jsx'],
        modules: [
            options.paths.src,
            'node_modules'
        ],
        alias: {}
    }
}