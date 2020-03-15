

// const soap = require('soap');

// const PSU_URL = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';

// async function loginPSUPassport(psuPassport, password) {

//     return new Promise((resolve, reject) => {
//       soap.createClient(PSU_URL, (err, client) => {
//         if (err) return reject(err);

//         let user = {
//           username: psuPassport,
//           password: password
//         }

//         client.GetStaffDetails(user, (err, response) => {
//           if (err) return reject(err);
//           else
//             return resolve(response.GetStaffDetailsResult.string);
//         })
//       })
//     })
//   }

// const Psu =  async (req, res) => {

//     const { username, password } = req.body;
//     const result = await loginPSUPassport(username, password);
//     console.log(result)
//     return res.status(200).json(result)
// }

// export default Psu;


require('tls').DEFAULT_MIN_VERSION = 'TLSv1'   // since TLSv1.3 default disable v1.0 
const express = require('express');
const soap = require('soap');
const bodyParser = require('body-parser')
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';
const app = express()
const router = express.Router()
app.use(bodyParser.urlencoded({extended: false}), router)
app.use(bodyParser.json, router)

const out = `

<html>
<body>
  <h2>PSU Passport Authentication (SOAP) </h2>
 <form action="/" method="post">
 Username: <input type="text" name="username" /> <br>
 Password: <input type="password" name="password" /> <br>
 <input type="submit" value="Submit">
</form>
</body>
</html> 
`

router.route('/studentlist')
   .get((req, res) => {
       res.send(out)
   })
   .post((req, res) => {
       soap.createClient(url, (err, client) => {
           if (err) 
           console.error(err);
           else {
               
               let user = {}
               user.username = req.body.username
               user.password = req.body.password

               client.GetStaffDetails(user, function (err, response) {
                   // client.GetStudentDetails(args, function(err, response) {
                   if (err) console.error(err);
                   else {
                       console.log(response);
                       res.send(response);

                       //แสดงข้อมูลหาก login ผ่าน
                   }
               });
           }
       });
   })

app.listen(3000, () => console.log('Server is ready!'))