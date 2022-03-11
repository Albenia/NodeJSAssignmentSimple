//step1 import mongodb library
const  mongoDbClient = require("mongodb").MongoClient;
//sep2 get connection string
const url ="mongodb+srv://albenia:albenia@cluster0.mysmb.mongodb.net/Twitterapp?retryWrites=true&w=majority"
//step3 connect mongodb database server
var dbclient;
exports.connect = ()=>{
    mongoDbClient.connect(url)
    .then(
        (client)=>{
            dbclient = client;
            console.log("mongodb is connected");
            
        },
        (err)=>{console.log(err);}
    )
}
exports.getCollection= (name)=>{
    return dbclient.db("Twitterapp").collection(name);

}