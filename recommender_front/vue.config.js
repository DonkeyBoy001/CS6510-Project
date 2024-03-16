module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    devServer: {
        proxy: {
            '/rest': {  
                changeOrigin: true,  
                target: '@api/movie',  
            }
        }
    }
}