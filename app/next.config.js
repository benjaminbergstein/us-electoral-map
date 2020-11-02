const isProd = process.env.NODE_ENV === 'production'

console.log(isProd)
module.exports = {
  assetPrefix: isProd ? '/us-electoral-map/' : '',
  basePath: isProd ? '/us-electoral-map' : '',
}
