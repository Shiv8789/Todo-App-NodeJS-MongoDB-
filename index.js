const express = require('express');

const createError = require('http-errors');

const path = require('path');

require('./db/db.conn');

const Todo = require('./models/todo.model');

const router = require('./routes/todo.routes');


const app = express();

app.use(express.static(path.join(__dirname,'/public')))

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router);





app.use((err, req, res, next) => {

    res.status(err.status || 500);
    res.send({
        err: {
            status: err.status || 500,
            message:err.message
            
        }
        
    })
    
    
})









app.listen(5000, () => {
    console.log("server is running on port 5000");
}
)