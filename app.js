const express = require("express");
square = require("./square");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    width = 4;
    msg = `Square width: ${width}, area: ${square.area(width)}, perimeter: ${square.perimeter(width)}`;
    res.send("Hello World!\n" + msg);
});

app.listen(port, function () {
    console.log(`Listening on port ${port}!`);
});