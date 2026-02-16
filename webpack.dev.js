const path = require('path');

/**
 * Development webpack configuration
 * Used for development builds and hot reloading
 */

module.exports = {
  mode: 'development',
  
  // Development-specific settings
  devtool: 'eval-source-map',
  
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: false, // Don't clean in dev mode for faster rebuilds
  },

  // Optimizations for development
  optimization: {
    minimize: false,
    usedExports: true,
  },

  // Stats for development
  stats: {
    colors: true,
    errorDetails: true,
    moduleTrace: true,
  },

  // Watch options
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
};
