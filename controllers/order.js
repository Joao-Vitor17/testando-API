const { getAllBooks } = require("../services/order");

function getOrders(req, res){
    try {
        const orders = getAllBooks(); 
        res.send(orders);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getOrders,
}