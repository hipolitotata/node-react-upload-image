const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// routes
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

if (process.env.NODE_ENV !== 'production') {
    console.log('dev server is running');
    require('dotenv').config();
}

app.use(cors());
app.use(express.json());
app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use('/posts', postsRoutes);
app.use('/auth', authRoutes);

app.listen(8000);