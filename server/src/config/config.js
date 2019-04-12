module.exports = {
    port: 8082,
    dbURL: 'mongodb://localhost/mevn',
    dbOptions: {
//        useMongoClient: true,
        
        // WARNING: 
        // The `useMongoClient` option is no longer necessary in mongoose 5.x, 
        // please remove it.
        
        useNewUrlParser: true // 
    }
}
