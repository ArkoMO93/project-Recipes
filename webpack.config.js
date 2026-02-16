const path = require('path');
const { execSync } = require('child_process');

/**
 * Root-level webpack configuration for orchestrating builds
 * This file helps coordinate builds between frontend and backend
 */

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // This is a meta-configuration file
    // Actual builds are handled by Next.js and NestJS internally
    mode: isProduction ? 'production' : 'development',
    
    // Entry points for both projects
    entry: {
      // Note: Next.js and NestJS handle their own entry points
      // This is mainly for reference/documentation
    },

    output: {
      // Outputs are handled by individual projects
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },

    // Plugins and loaders are handled by Next.js (Turbopack/SWC) and NestJS internally
    plugins: [],

    // Resolve configuration
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },

    // External dependencies (handled by Next.js and NestJS)
    externals: {},

    // Stats configuration
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    },
  };
};
