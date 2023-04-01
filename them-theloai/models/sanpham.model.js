var db = require('./db');
//định nghĩa khuôn mẫu cho sản phẩm
const spSchema = new db.mongoose.Schema(
    { 
        name:{ type: String, required: true },
        price: {type: Number, required: true},
        description: {type: String, required: false }, 
        id_theloai: {type: db.mongoose.Schema.Types.ObjectId, ref: 'theloaiModel'}
    },
    {
        collection: 'san_pham'
    }
);
// tạo model
let spModel = db.mongoose.model('spModel', spSchema );
//--- Làm tương tự với thể loại 
let theloaiSchema = new db.mongoose.Schema(
    { 
        name: {type: String, required: true}
    },{
        collection: 'the_loai'
    }
);
let theloaiModel = db.mongoose.model("theloaiModel", theloaiSchema);
module.exports = { spModel , theloaiModel }