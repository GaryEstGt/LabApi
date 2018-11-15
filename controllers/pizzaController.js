const pizza= require('../models/pizzasModel');
const tok= require('../models/tokenModel');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.pizza_create = function (req, res) {
    let piza = new pizza(
        {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            ingredientes: req.body.ingredientes,
            tipoMasa:req.body.tipoMasa,
            tamaño: req.body.tamaño,
            queso: req.body.queso
        }
    );
    piza.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Pizza Created successfully')
    })
};
exports.pizza_details = function (req, res) {
    pizza.find({}, function (err, pizza) {
        if (err) return next(err);
        res.send(pizza);
    })
};
exports.pizza_detailsone = function (req, res) {
    pizza.findOne(req.body.nombre, function (err, pizza) {
        if (err) return next(err);
        res.send(pizza);
    })
};
exports.pizza_update = function (req, res) {
    pizza.findOneAndUpdate(req.body.nombre, {$set: req.body}, function (err, pizza) {
        if (err) return next(err);
        res.send('Pizza udpated.');
    });
};
exports.pizza_delete = function (req, res) {
    pizza.findOneAndRemove(req.body.nombre, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
 exports.pizza_verificar = function (req, res) {
    tok.findOne(req.body.nombre, function (err, pizza) {
        if (err) return next(err);
        res.send(pizza);
    })
};
