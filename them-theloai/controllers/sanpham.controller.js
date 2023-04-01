var myMD = require ('../models/sanpham.model');

exports.list = async (req,res,next)=>{
    // tạo chức năng lọc
    let dieu_kien_loc = null; 
    if( typeof(req.query.price) != 'undefined' )
    {
        // dieu_kien_loc = { price: req.query.price };
        dieu_kien_loc = { price: { $gte: req.query.price   } };
         // lớn hơn hoặc bằng giá trị người dùng nhập
    }


    //let list = await myMD.spModel.find( dieu_kien_loc ).sort( { name:1 } );
    let list = await myMD.spModel.find(dieu_kien_loc).populate('id_theloai');
    console.log(list);
    
    res.render('sanpham/list', {listSP : list})
}

exports.add = async (req,res,next)=>{
    let msg = '';

    if(req.method =='POST'){
        // viết kiểm tra hợp lệ dữ liệu...

        // tạo đối tượng model để gán dữ liệu post
        let objSP = new myMD.spModel();
        objSP.name = req.body.name;
        objSP.price = req.body.price;
        objSP.description = req.body.description;
        // thực hiện ghi vào CSDL
        try {
            let new_sp = await objSP.save();
            console.log(new_sp);
            msg = 'Đã thêm thành công';
        } catch (error) {
            msg = 'Lỗi ghi CSDL: '+ error.message;
            console.log( error );
        }

    }


    res.render('sanpham/add', {msg: msg})
}