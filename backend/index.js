const express = require('express');
const mongoose = require('mongoose')
const cors = require("cors");
const sharp = require('sharp');
require("dotenv").config();
/*https://www.npmjs.com/package/sharp*/
const router = require("./routes/user-routes")

const app = express();
app.use(cors());
var PORT = process.env.PORT

app.use("/api/user", router);

// databse conn
mongoose.connect(process.env.mongo_conn_string, {
    
}).then(() => {
    console.log("DB Connected!")
}).catch((err) => console.log(err))



// app.get('/', (req, res)=>{
//     res.status(200);
//     res.send("Welcome to root URL of Server");
// });

// app.post('/uploadImage/', (req, res)=>{
//     res.status(200);
//     let url = req.body.url;
    
//     res.send(url); // revert with image link of the uploaded image.
// })

// app.get('/editImage', (req, res)=>{
//     const query = req.query;
//     const url = req.body.url;
//     // edit the image depending on query.
    
// })

// app.get('/api/get', (req, res) => {
//     console.log(database);
//     // database.collection("requestdata").find({}).toArray((err, result) => {
//     //     res.send(result);
//     // })
// });

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    }
    else 
        console.log("Error occurred, server can't start", error);
    }
);

