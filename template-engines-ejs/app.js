const express = require('express');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()


app.set('view engine', 'ejs');
// set views folder 
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));
// set directory for public folder that includes css-files, .js-files etc.
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// catch all - for error page
app.use((req, res, next) => {
    res
    .status(404)
    //.sendFile(path.join(__dirname, './', 'views', '404.html'));
    .render('404', { 
        pageTitle: 'Page not found!',
        path: '404'
    } )
});


app.listen(3000);
