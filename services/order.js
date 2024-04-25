const fs = require("fs");

function getAllBooks(){
    return JSON.parse(fs.readFileSync("order.json"));
}

module.exports = {
    getAllBooks,
}