const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost/postsUpload", {
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