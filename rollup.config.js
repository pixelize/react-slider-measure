import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import autoExternal from "rollup-plugin-auto-external";

const typescriptConfig = { cacheRoot: "tmp/.rpt2_cache" };
const noDeclarationConfig = Object.assign({}, typescriptConfig, {
  tsconfigOverride: { compilerOptions: { declaration: false } }
});

const config = {
  input: "src/index.ts"
};

const umd = Object.assign({}, config, {
  output: {
    file: "dist/react-slider-measure.dev.js",
    format: "umd",
    name: "pose",
    exports: "named",
    globals: { react: "React" }
  },
  external: ["react", "react-dom", "styled-components"],
  plugins: [
    commonjs(),
    typescript(noDeclarationConfig),
    resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
});

const umdProd = Object.assign({}, umd, {
  input: "src/index.ts",
  output: Object.assign({}, umd.output, {
    file: "dist/react-slider-measure.js"
  }),
  plugins: [
    autoExternal(),
    commonjs(),
    typescript(noDeclarationConfig),
    resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    uglify()
  ]
});

const es = Object.assign({}, config, {
  output: {
    file: "dist/react-slider-measure.es.js",
    format: "es",
    exports: "named"
  },
  plugins: [autoExternal(), commonjs(), typescript(noDeclarationConfig)]
});

const cjs = Object.assign({}, config, {
  output: {
    file: "lib/index.js",
    format: "cjs",
    exports: "named"
  },
  plugins: [autoExternal(), commonjs(), typescript(typescriptConfig)]
});

export default [umd, umdProd, es, cjs];
