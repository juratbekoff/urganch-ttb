"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var service_1 = __importDefault(require("../service/service"));
var router = (0, express_1.Router)();
router
    .get('/', function (req, res) {
    res.render('yangiliklar');
})
    .get('/admin', function (req, res) {
    res.render('enter');
})
    .get('/boglanish', function (req, res) {
    res.render('boglanish');
})
    .get('/rahbariyat', function (req, res) {
    res.render('rahbariyat');
})
    .get('/vazifalari', function (req, res) {
    res.render('vazifalari');
})
    .get('/bolimlar', function (req, res) {
    res.render('bolimlar');
})
    .get('/muassasa', function (req, res) {
    res.render('muas');
})
    .get('/yangiliklar', function (req, res) {
    res.render('yangiliklar');
})
    .get('/haqida', function (req, res) {
    res.render('haqida');
})
    // admin
    .get('/newsadmin', function (req, res) {
    res.render('news', {
        layout: 'index'
    });
})
    .get('/admin4868', function (req, res) {
    service_1["default"].findAll()
        .then(function (arizalar) { return res.render('arizalar', { layout: 'index', arizalar: arizalar }); })["catch"](function (error) { return res.render('arizalar', { error: error }); });
})
    .post('/admin4868', function (req, res) {
    var ariza = {
        id: 0,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        gender: req.body.gender,
        number: req.body.number,
        text: req.body.text
    };
    service_1["default"].create(ariza)
        .then(function (data) { return res.redirect('/boglanish'); })["catch"](function (error) { return res.render('arizalar', { error: error }); });
})
    .get('/delete/:id', function (req, res) {
    service_1["default"].RemoveAriza(+req.params.id)
        .then(function (data) { return res.redirect('/admin4868'); })["catch"](function (error) { return res.render('index', { error: error }); });
});
exports["default"] = router;
//# sourceMappingURL=routes.js.map