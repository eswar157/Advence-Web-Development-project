const express=require('express')



const app=express()

app.get('/search',function(req,res)
{
res.send('<h1></h1>')
})
app.listen(9000)