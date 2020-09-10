const fastify = require('fastify')

const app = fastify();

app.get('/g', (req,res) =>{
     res.redirect('https://google.com')
})
app.listen(3000, ()=>{
     console.log("Server is starting")
})
