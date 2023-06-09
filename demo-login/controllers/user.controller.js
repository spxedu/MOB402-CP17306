const md = require('../models/user.model');

exports.Login = async (req, res, next)=>{
    let msg = '';
    if(req.method == 'POST'){

        try {
            let objU =await md.userModel.findOne({ username: req.body.username });
            console.log(objU);
            if(objU != null){  // có tồn tại user
                // kiểm tra pass
                if(objU.passwd == req.body.passwd){
                    // đăng nhập thành công
                    // ghi dữ liệu vào session
                    req.session.userLogin = objU;
                    // chuyển trang
                   return res.redirect('/users');

                }else{
                    msg = 'Sai password';
                } 

            }else{
                msg = 'Không tồn tại user';
            }

        } catch (error) {
            msg = error.message; 
        } 

    }

    res.render('user/login' , {msg: msg});
}

exports.Reg = async (req, res, next)=>{
    let msg = '';
    if(req.method =='POST'){
        console.log(req.body);
        // kiểm tra hợp lệ dữ liệu
        if(req.body.passwd != req.body.passwd2){
            msg = 'Xác nhận password không đúng';
            return  res.render('user/reg' , {msg: msg});
        }
        //tự viết thêm kiểm tra hợp lệ dữ liệu ở các trường khác
        
        try {
            let objU = new md.userModel();
            objU.username = req.body.username;
            objU.passwd = req.body.passwd;
            objU.email = req.body.email;

            await objU.save();
            msg = 'Đăng ký thành công';
        } catch (error) {
            msg = error.message;
        } 
    }

    res.render('user/reg' , {msg: msg});
}
exports.Logout = (req, res, next)=>{

}