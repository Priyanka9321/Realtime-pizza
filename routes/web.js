const homeControl = require('../app/http/controllers/homeController')
const authControl = require('../app/http/controllers/authController')
const cartControl = require('../app/http/controllers/customers/cartController')
const cartController = require('../app/http/controllers/customers/cartController')

function initRoutes(app) {
    app.get('/', homeControl().index) 
    app.get('/login', authControl().login)   
    app.get('/register', authControl().register)
    app.get('/cart', cartControl().index)   
    app.post('/update-cart',cartController().update)
}

module.exports = initRoutes