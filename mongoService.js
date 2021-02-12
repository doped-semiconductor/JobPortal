const MongoClient = require('mongodb').MongoClient

class mongoDriver{
    /**
     * A customized medium to run queries 
     * for executive operations and testing
     */
    constructor(){
        /** connection parameters for remote database */
        this.url = "your uri"
        this.connectionParams={
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    }

    async checkUserExist(data,callback){
        /** 
         *To check if a username is already taken while registering a new user
         * 
         * Input: data = {'uname':''}
         * Returns: boolean
         * 
         *  */
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('userRegisteration').find(data).toArray();
        var res = true
        console.log(items)
        if (!items.length){ res = false}       
        client.close();
        callback(res)
        return res
    }

    async devRegisterUser(data, callback){
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('userRegisteration').insertOne(data)
        console.log("Dev register: inserted")
        console.log(items)
        //console.log(items);        
        client.close();
        callback(items)
    }

    async devTestConnection(callback){
        /** To test if the connection is working
         * Input: none
         * Output: Array of size = 1
         */
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('userRegisteration').find({'uname':'dummy0'}).toArray();
        client.close();
        if (callback){callback(items)}        
    }
}

x = new mongoDriver()
x.checkUserExist({'uname':'dummy2'}, (it)=>{
    console.log(it)
})

module.exports.mongoDriver = mongoDriver