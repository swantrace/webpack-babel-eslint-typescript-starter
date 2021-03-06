const plugins = ['@babel/plugin-proposal-optional-chaining'];

if (process.env.NODE_ENV !== 'production') {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'last 2 versions',
        useBuiltIns: 'usage',
        corejs: {
          version: '3.15',
          proposal: true,
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins,
};
