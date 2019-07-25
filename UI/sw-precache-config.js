module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)',
    'build/static/js/*'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',

  runtimeCaching: [{
    urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com/,
    handler: 'networkFirst'
  }, {
    urlPattern: /\/articles\//,
    handler: 'fastest',
    options: {
        cache: {
          maxEntries: 10,
          name: 'articles-cache'
        }
    }
  }],
};
