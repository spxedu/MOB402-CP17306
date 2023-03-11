const http = require('http');
const sv = http.createServer( (req, res) =>{
    console.log(req.url);
    switch(req.url){
        case '/': // trang chủ 
            homePage(req, res);
        break;
        case '/gioithieu.html':    gioiThieu(req, res); break;
        default: 
            res.writeHead(200,{ 'Content-Type':'text/html'});
            res.end("Trang web khong ton tai");
        break;
    }

});
const homePage = (req, res)=>{
    res.writeHead(200,{ 'Content-Type':'text/html'});
    res.end("<h1>Day la trang home </h1>");
}
const gioiThieu = (req, res)=>{
    res.writeHead(200,{ 'Content-Type':'text/html'});
    res.end("<h1>Day la trang Giới thiệu </h1>");
}
sv.listen(8080);
console.log("server đã chạy");