import babel from 'rollup-plugin-babel';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  // Define the JavaScript file to use as the starting point for bundling.
  input: 'dist/example-plugin.js',

  // Define the output options for the generated bundle.
  output: {
    // Define the bundle file.
    file: 'dist/example-plugin-bundle.js',
    // Define the bundle format (self-executing function in this case).
    format: 'iife',
    // Enable generation of a separate source map file.
    sourcemap: true,
    // Define the module "jquery" to be expected as a global variable "jQuery".
    globals: {
      jquery: 'jQuery'
    }
  },

  // Define the module "jquery" to be excluded from the bundle.
  external: [
    'jquery'
  ],

  // Define the plugins to use during bundling.
  plugins: [
    // Use Babel to transpile ES2015 code for older browsers.
    babel({
      exclude: 'node_modules/**',
    }),
    // Use source maps from input files.
    sourcemaps()
  ]
};
