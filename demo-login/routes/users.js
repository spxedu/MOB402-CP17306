var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller');
var check_login = require('../middlewares/check_login');

// viết middleware CHUNG cho tất cả các route trong file này ở đây
router.use( (req, res, next) => {
    console.log("---- Dòng này là middleware ---- ");
    next();
});



/* GET users listing. */ //    /users 
router.get('/',check_login.yeu_cau_dang_nhap , function(req, res, next) {
  // truy cập vào session
  let u = req.session.userLogin;

  res.send( "Thông tin user: " );
});


router.get('/login',userCtrl.Login );
router.post('/login',userCtrl.Login );

router.get('/reg',userCtrl.Reg );
router.post('/reg',userCtrl.Reg );

router.get('/logout',userCtrl.Logout );



module.exports = router;
