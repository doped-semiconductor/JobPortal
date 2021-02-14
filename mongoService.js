const MongoClient = require('mongodb').MongoClient

class mongoDriver{
    /**
     * A customized medium to run queries 
     * for executive operations and testing
     */
    constructor(){
        /** connection parameters for remote database */
        this.url = "mongodb+srv://admin-dev-0:rxP3tvNw_BLYA5a@jpcluster.w95j0.mongodb.net/jobPortalDevDatabase?retryWrites=true&w=majority";
        this.connectionParams={
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    }
    async recruiterLogin(data,callback){
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('recruiterUsers').find(data).toArray();
        var res = false
        //console.log(items)
        if (items.length==1){ res = true}       
        client.close();
        if(callback){callback(res)}        
        return res
    }

    async checkUserEmailExist(data,callback){
        /** 
         *To check if a username is already taken while registering a new user
         * 
         * Input: data = {'uname':''}
         * Returns: boolean
         * 
         *  */
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('recruiterUsers').find(data).toArray();
        var res = true
        if (!items.length){ res = false}       
        client.close();
        if(callback){callback(res)}        
        return res
    }

    async addRecruiter(data, callback){
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('recruiterUsers').insertOne(data)
        client.close();
        if (callback){callback(items)}
    }

    async searchWorker(data, callback){
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('workerProfile').find(data).toArray();
        client.close();
        if (callback){callback(items)} 
    }

    async getMyJobPosts(data, callback){
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('jobPosts').find(data).toArray();
        client.close();
        if (callback){callback(items)} 
    }

    async addJobPost(data, callback){
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('jobPosts').insertOne(data)
        console.log("Job Post: inserted")
        client.close();
        callback(items)
    }

    async getJobPosts(data, callback){
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('jobPosts').find(data).toArray();
        client.close();
        if (callback){callback(items)} 
    }

    async addWorkerProfile(data){
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('workerProfile').insertOne(data)
        console.log("Worker Profile: inserted")
        client.close();
    }

    async getWorkerProfile(data, callback){
        const client = await MongoClient.connect(this.url,this.connectionParams)
        const db = client.db('jobPortalDevDatabase');
        const items = await db.collection('workerProfile').find(data).toArray();
        client.close();
        if (callback){callback(items)} 
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

// x = new mongoDriver()
// x.addJobPost({'uname':'dummy2'}, (it)=>{
//     console.log(it)
// })

module.exports.mongoDriver = mongoDriver