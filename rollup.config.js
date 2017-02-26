import babel from 'rollup-plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  entry: 'dist/example-plugin.js',
  dest: 'dist/example-plugin-bundle.js',
  format: 'iife',
  external: [
    'jquery'
  ],
  globals: {
    jquery: 'jQuery'
  },
  sourceMap: true,
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    sourcemaps()
  ]
};
