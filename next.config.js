const withPWA = require('next-pwa')
 
module.exports = withPWA({
    trailingSlash: true,
    pwa: {
        dest: 'public'
    }
})

module.exports = {
    trailingSlash: true,
  }