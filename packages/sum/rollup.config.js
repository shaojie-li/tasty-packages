import typescript from '@rollup/plugin-typescript';
import delDir from 'rollup-plugin-delete'
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { dts } from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { main, module } from "./package.json";

/**
 * @type {import('rollup').RollupOptions[]}
 */
export default [
    {
        input: 'src/index.ts',
        output:  [{
            file: main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: module,
            format: "esm",
            sourcemap: true,
        }],
        plugins: [
            delDir({targets: ["dist/*"]}), 
            typescript({
                tsconfig: "./tsconfig.json",
            }),
            peerDepsExternal(),
            
        ]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    }
];
