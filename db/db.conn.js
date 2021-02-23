const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shivtodo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
    
})
    .then(() => {
        console.log("database connected");

    })
    .catch((err) => {
        next(err);
})



mongoose.connection.on('connected', () => {
    console.log("mongodb database is connected successfully.");

})


mongoose.connection.on('disconnected', () => {
    console.log("database connection is lost");
})



process.on('SIGINT', () => {
    mongoose.connection.close();
    process.exit(0);
})