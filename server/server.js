let express = require("express");
let app = express();

let port = 3000 //|| heroku port

app.use(express.static("public"))
app.listen(port, function(){
    console.log("server is listening")
})