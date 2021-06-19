
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.31.142.231:8080',
                pathRewrite: {'^/api' : ''}
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/nccu-dist-zookeeper-frontend/'
        : '/nccu-dist-zookeeper-frontend/', 
    css: {
        extract: false
    }
}
