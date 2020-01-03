const jwt=require('jsonwebtoken')
const secret='secret';
var checkAuthorization=(req,res,next)=>{
var token=req.headers['authorization'];   
    if(token == undefined)
    {
        return res.json({"message": "unauthorized access"})
    }
    if(token.startsWith('Bearer '))
    {
        token=token.slice(7,token.length)
        jwt.verify(token,secret,(err,decoded)=>{
            if(err){
                return res.json({"message":"session expired"})
            }
            else{
                next();
            }    
        })
    }
}
module.exports=checkAuthorization;
