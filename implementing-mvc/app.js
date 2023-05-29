const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
const path = require('path');
const errorController = require('./controllers/error');

const app = express()


app.set('view engine', 'ejs');
// set views folder 
app.set('views', 'views')


app.use(bodyParser.urlencoded({ extended: false }));
// set directory for public folder that includes css-files, .js-files etc.
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// catch all - for error page
app.use(errorController.get404);


app.listen(3000);
