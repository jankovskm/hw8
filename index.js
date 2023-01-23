//call express
const express = require("express");

// import na handlers
const routes = require("./routes");

// kreiranje na express app
const app = express();
//activate json
app.use(express.json());

//home route
app.get("/", routes.routes);

app.post("/students", routes.routes);


// startuvanje na serverot
app.listen(8080, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Serverot e uspeshno startuvan!");
});

