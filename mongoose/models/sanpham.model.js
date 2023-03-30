var db = require('./db');
//định nghĩa khuôn mẫu cho sản phẩm
const spSchema = new db.mongoose.Schema(
    { 
        name:{ type: String, required: true },
        price: {type: Number, required: true},
        description: {type: String, required: false }
    },
    {
        collection: 'san_pham'
    }
);
// tạo model
let spModel = db.mongoose.model('spModel', spSchema );
//--- Làm tương tự với thể loại 
module.exports = { spModel }