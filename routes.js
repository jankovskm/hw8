const fs = require('fs');

const routes = (req, res) => {
    //console.log(req.params);
    //console.log(req.path);

    let result;
    switch(req.path){
        case "/students":
            writeToFile(req.body);
            result = "OK";
            //res.send(req.body);
        break;
        default:
        result = "Homepage";
    }
    res.send(result.toString());
}

const writeToFile = (text) => {
    fs.writeFile("students.txt", JSON.stringify(text), "utf-8", (err) => {
        if (err) {
            console.log("Could not save file");
        }
     
        console.log("File has been saved");
    })
}


module.exports = {
    routes
}