const User = require('../../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');

function authController() {
    return {
        login(req, res) {
            res.render("auth/login");
        },

        postLogin(req, res, next) {
            const { email, password } = req.body;
            // validate request
            if (!email || !password) {
                req.flash('error', 'All fields are required');
                return res.redirect('/login');
            }

            passport.authenticate('local', (err, user, info) => {
                if (err) {
                    req.flash('error', info.message);
                    return next(err);
                }
        
                if (!user) {
                    req.flash('error', info.message);
                    return res.redirect('/login');
                }
        
                req.logIn(user, (err) => {
                    if (err) {
                        req.flash('error', info.message);
                        return next(err);
                    }
        
                    return res.redirect('/');
                });
            })(req, res, next);
        },

        register(req, res) {
            res.render("auth/register");
        },

        async postRegister(req, res) {
            const { name, email, password } = req.body;
            // validate request
            if (!name || !email || !password) {
                req.flash('error', 'All fields are required');
                req.flash('name', name);
                req.flash('email', email);
                return res.redirect('/register');
            }

            // check if email exists
            try {
                const userExists = await User.exists({ email: email });
                if (userExists) {
                    req.flash('error', 'Email already taken');
                    req.flash('name', name);
                    req.flash('email', email);
                    return res.redirect('/register');
                }

                // Hash password
                const hashedPassword = await bcrypt.hash(password, 10);

                // create a user in database
                const user = new User({
                    name: name,
                    email: email,
                    password: hashedPassword
                });

                await user.save();
                // Login 
                return res.redirect('/');
            } catch (err) {
                console.error(err);
                req.flash('error', 'Something went wrong');
                return res.redirect('/register');
            }
        },
        logout(req, res) {
            req.logout((err) => {
                if (err) {
                    console.error(err);
                    return res.redirect('/'); // or wherever you want to redirect in case of error
                }
                return res.redirect('/login');
            });
        } // Close logout method here
    }; // Close return object here
} // Close authController function here

module.exports = authController;
