
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/nccu-dist-zookeeper-frontend/'
        : '/nccu-dist-zookeeper-frontend/', 
    css: {
        extract: false
    }
}
