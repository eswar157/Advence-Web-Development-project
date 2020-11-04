const express=require('express')

const app=express()
const path=require('path')

 app.get('/',function(req,res)
 {
 res.send('<h1>eswar</h1>')


app.use(express.static(path.join(__dirname,'htmlFiles'))
app.get('/',function(req,res)
{
    console.log(req.url)
    res.status(200)
    .sendFile(path.join(__dirname,'htmlfiles', index.html))
})
)
