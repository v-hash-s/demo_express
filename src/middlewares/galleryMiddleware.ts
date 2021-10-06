app.set("view engine", "ejs");
export const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(require('./auth'));

