const express = require('express');

const app = express();

const middleware = (req,res,next) => {
    console.log("this is the middleware")
    next()
}
app.use('/', middleware ,  (req, res, next) => {
    res.send("hello")
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})


    