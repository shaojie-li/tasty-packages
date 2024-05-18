import typescript from '@rollup/plugin-typescript';
import delDir from 'rollup-plugin-delete'
import generatePackageJson from 'rollup-plugin-generate-package-json'
import { main, module } from "./package.json";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input: 'src/index.ts',
    output:  [{
        file: main,
        format: "cjs",
    },
    {
        file: module,
        format: "esm",
        exports: "named",
    }],
    plugins: [delDir({targets: ["dist/*"]}), typescript({tsconfig: 'tsconfig.json'}), generatePackageJson({
        baseContents: ({ scripts, ...props }) => ({
            ...props
        })
    })]
};
