const withPWA = require('next-pwa')
 
module.exports = withPWA({
    trailingSlash: true,
    pwa: {
        dest: 'public'
    }
})

module.exports = {
    trailingSlash: true,
    env: {
        baseUrl: 'https://virtserver.swaggerhub.com/garusocruz/test/1.0.0/',
      },
  }