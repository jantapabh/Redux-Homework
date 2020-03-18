const express = require("express")
const soap = require("soap")
const bodyParser = require("body-parser")
const cors = require("cors")
const url = "https://passport.psu.ac.th/authentication/authentication.asmx?wsdl"

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.get("/", (req, res) => {
      res.send("test")
})
app.post("/", (req, res) => {
      soap.createClient(url, (err, client) => {
            if (err) {
                  console.error(err)
                  res.sendStatus(401)
            } else {
                  let user = {}
                  user.username = req.body.username
                  user.password = req.body.password
                  client.GetStaffDetails(user, function(err, response) {
                        // client.GetStudentDetails(args, function(err, response) {
                        if (err) {
                              console.error(err)
                              res.sendStatus(401)
                        } else {
                              console.log(response)
                              try {
                                    if (
                                          response.GetStaffDetailsResult
                                                .string[0]
                                    ) {
                                          res.send(
                                                response.GetStaffDetailsResult
                                                      .string[0]
                                          )
                                    } else {
                                          res.sendStatus(401)
                                    }
                              } catch (error) {
                                    res.sendStatus(401)
                              }
                        }
                  })
            }
      })
})

app.listen(80, () => console.log("Server is ready!"))