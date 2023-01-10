const express=require('express');
const mongodb=require('mongodb').MongoClient;

const categoryRoute=express.Router();
const category=[
    {
        "id":1,
        "category": "Fashion",
        "thumb":"https://i.ibb.co/56VP0Fn/cloths.jpg"
    },
    {
        "id":2,
        "category":"Electronics",
        "thumb":"https://i.ibb.co/pw5Wtdx/appliances.jpg"
    },
    {
        "id":3,
        "category":"Essentials",
        "thumb":"https://i.ibb.co/0cw34xm/essentials.jpg"
    },
    {
        "id":4,
        "category": "Footwear",
        "thumb":"https://i.ibb.co/r3SZq8S/footware.jpg"
    }
]


categoryRoute.get('/',(req,res)=>{
    mongodb.connect(" mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb",function(err,dc){
        if(err){
            console.log(err)
        }else{
            let dbObj=dc.db('fullstack')
            dbObj.collection('category').find().toArray(function(err,data){
                if(err){
                    console.log(err)
                }else{
                    res.render('category',{title:"This is Category page",data:category})
                    
                }
            })
        }
    })
   
})

module.exports=categoryRoute