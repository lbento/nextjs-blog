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
        baseUrl: 'https://squadactiviadevelop.appspot.com/',
        clientId: '9muP0l7icWd9f0jTKzca',
        trackerId: 'HIFAjksjhDASKJDHKE'
      },
  }