function cartController() {
    return {
        index(req, res) {
            res.render("customers/cart")
        },
        update(req, res) {
            try {
                if (!req.session) {
                    throw new Error('Session not initialized');
                }
                
                if (!req.session.cart) {
                    req.session.cart = {
                        items: {},
                        totalQty: 0,
                        totalPrice: 0
                    };
                }
                
                let cart = req.session.cart;
        
                // Cart update logic here...

                if (!cart.items[req.body._id]) {
                    cart.items[req.body._id] = {
                        item: req.body,
                        qty: 1
                    }
                    cart.totalQty += 1;
                    cart.totalPrice += req.body.price;
                    
                } else {
                    cart.items[req.body._id].qty += 1;
                    cart.totalQty += 1;
                    cart.totalPrice += req.body.price;
                }

                return res.json({
                    totalQty: req.session.cart.totalQty
                });
            } catch (error) {
                console.error('Error updating cart:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
                
    }
}

module.exports = cartController