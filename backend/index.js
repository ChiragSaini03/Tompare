const express = require('express');
const sharp = require('sharp');
/*https://www.npmjs.com/package/sharp*/

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.post('/uploadImage/', (req, res)=>{
    res.status(200);
    let url = req.body.url;
    
    res.send(url); // revert with image link of the uploaded image.
})

app.get('/editImage', (req, res)=>{
    const query = req.query;
    const url = req.body.url;
    // edit the image depending on query.
    
})

app.listen(PORT, (error) =>{
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

