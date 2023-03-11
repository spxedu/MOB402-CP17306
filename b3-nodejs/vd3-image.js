const http = require('http');
const fs = require('fs'); // thư viện đọc ghi file
const sv = http.createServer( (req, res)=>{
    console.log(req.url);
    switch(req.url){
        case '/logo.png': // trả về file logo.png
            fs.readFile('./logo.png', (err, data)=>{
                    if(err)
                        throw err;
                    res.end( data );
            })

        break;
        case '/': // trang chủ
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('<h1>Trang chu</h1> <img src="/logo.png" />');
        break;
        default: 
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('Dia chi khong ton tai');
        break;
    }
});

sv.listen(8080);
console.log("server đã chạy");