const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// app.get('/api/contacts', (req, res) => {
//     res.json('Hello World!');
// });
app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});