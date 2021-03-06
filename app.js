const path = require('path');
const express = require('express');


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

console.log('Server is running')
app.listen(3000);