const http = require('http')
const fs = require('fs');

const indexPage = fs.readFileSync('../../Week-1/HTML&CSS/index.html', 'utf8');

const app = http.createServer((req,res) => {
    console.log(req.url);
   

    switch (req.url) {
        case '/':
            res.write(indexPage)
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