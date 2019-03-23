const routes = require('next-routes')

// Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('index','/', 'index')                         // blog   blog      /blog/:slug
