const express = require('express');
const app = express();
require('./config/db.connection')


const PORT = 3000;


app.get("/", function(req, res) {
    res.send("This is working!")
})

app.get("/new", function(req, res) {
    res.render("new.ejs")
})
        
app.get("/*", (req, res) => {
    const context = { error: req.error };
    return res.status(404).render("404", context);
});

app.listen(PORT, function() {
    console.log(`I am listening on port ${PORT}`)
});