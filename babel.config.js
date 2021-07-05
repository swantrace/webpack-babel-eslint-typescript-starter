module.exports = {
  presets: [['@babel/preset-env', {
    targets: 'last 2 versions',
    useBuiltIns: 'usage',
    corejs: {
      version: '3.15',
      proposal: true,
    },
  }]],
};
