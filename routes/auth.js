exports.index = function(req, res){

    res.json({

        accessToken: req.session.access_token || null,
        psuInfo: req.session.psuInfo ? JSON.parse(req.session.psuInfo) : null
    });
}

exports.logout = function(req, res){

    req.session.destroy()  //ส่วนในการทำการ clear session เพื่อไม่ให้ฝั่ง backend มีข้อมูลค้าวอยู่หน้า fontend
    console.log('Clear Session '. req.session);
    res.send('Logout Success !');
}