const http = require('http');
const server = http.createServer( (req, res)=>{ 
    res.writeHead(200, "Ket noi thanh cong!!!", {
        'Content-Type':'text/html'
    });

    res.write("<meta charset='utf-8' /> <h1>Xin chào lớp nhé</h1>");
    res.end();
} );

server.listen(8080, 'localhost', (err)=>{
    if(err)
        console.log(err);
    
    console.log("Server đang chạy ở địa chỉ:  http://localhost:8080 ");
});
// chạy lệnh:  node  vidu1.js  
// mở trình duyệt web, vào địa chỉ trên để xem kết quả. 