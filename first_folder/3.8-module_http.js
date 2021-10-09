const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){

        res.end('this is our home page')
    }
    if(req.url==='/about'){

        res.end('this is our about page')
    }
    res.end(`
    <h1> Opps!!!!!!!!!!</h1>

    <P> THERE IS NO SUCH PAGE THAT YOU HAVE ENTERED</P>
    <a href = "/"> back to home</a>
    `)

})

server.listen(5001)


