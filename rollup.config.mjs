import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sourceMaps from "rollup-plugin-sourcemaps";
import del from 'rollup-plugin-delete'
import eslint from "@rollup/plugin-eslint"
export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "lib/cjs/index.js",
                format: "cjs",
                sourcemap: true,
                exports: 'auto',
            },
            {
                file: "lib/esm/index.js",
                format: "esm",
                sourcemap: true,
                exports: 'auto',
            },
        ],
        watch: {
            include: 'src/**',
        },
        plugins: [
            del({ targets: 'lib/*' }),
            postcss({
                use: ['sass'],
                modules: true,
                minimize: true
            }),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
            sourceMaps(),
            eslint({
                formatter: () => {},
                exclude: ['node_modules/**', './package.json', "**.*.scss"],
                throwOnWarning: false,
                throwOnError  : true,
            })
        ],
        external: ["react", "react-dom",]
    },
    {
        input: "lib/esm/types/index.d.ts",
        output: [{ file: "lib/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];