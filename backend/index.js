const exp=require("express");
const app=exp();
const fs=require("fs");
const qs=require("querystring")

app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

function readFile() {
 return fs.readFileSync("./employee.json", 'utf8',function(err,result){
        if(err)
        {
            console.log(err);
        }
        else{
            
            return result
        }

    })
}
    app.get('/employee',function (req,res) {
        let respo = JSON.parse(readFile());
        res.json(respo);
    })

    app.get('/admin/ctc',function(req,res){
        const resp=JSON.parse(readFile());
        var totalSal=resp.reduce((accumulator,emp)=>accumulator+emp.salary,0)
        res.json(totalSal)
    })


app.listen(5000,()=>{
    console.log("server is running on port 5000");
})

