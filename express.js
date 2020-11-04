const express=require('express')



const app=express()

app.get('/',function(req,res)
{
res.send('<h1>teja</h1>')
})
app.listen(9000)