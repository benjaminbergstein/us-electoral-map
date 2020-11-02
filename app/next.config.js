const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/us-electoral-map/' : '',
  basePath: isProd ? '/us-electoral-map' : '',
}
