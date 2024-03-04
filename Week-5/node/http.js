const http = require('http')

const app = http.createServer((req,res) => {
    console.log(req.url);
   

    switch (req.url) {
        case '/':
            res.write('<h1> Home page</h1>')
            break;
        case '/about' :
            res.write('<h1> About page </h1>')
            break;
        default:
            break;
            
    }
    res.end()
})

app.listen(5000,() => {
    console.log("Server is running on the port 5000")
})