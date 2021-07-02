module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Rosie | Design';
        return args;
      });
  },
  publicPath: './',
};