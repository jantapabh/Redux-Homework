require('tls').DEFAULT_MIN_VERSION = 'TLSv1'
const soap = require('soap')
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';


module.exports.login = function(req, res) {
    soap.createClient(url, (err, client) => {
     
        if(err)
        console.log(err);

        else{

             
            let user = {}
            user.username = req.body.username
            user.password = req.body.password

            client.GetStaffDetails(user, function(err, respone) {

                if(err)
                console.log(err)

                else{

                    const [stdId , fname, lname, id, type] = respone.GetStaffDetails.string;
                    req.session.psuInfo = JSON.stringify({
                        stdId,
                        fname,
                        lname,
                        id,
                        type
                    })
                    res.json({
                        stdId,
                        fname,
                        lname,
                        id,
                        type
                    })
                }
            })

        }


    })
}