"use strict";
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../static/pages')));
