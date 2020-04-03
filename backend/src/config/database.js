const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost:27017/postsUpload", {
        user: "root",
        pass: "1234",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
        function (err) {
            console.log(err)
        }
    );

if (!mongoose) {
    console.log('database is not connected')
}

module.exports = mongoose;