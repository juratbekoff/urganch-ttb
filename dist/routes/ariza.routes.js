"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var ariza_service_1 = __importDefault(require("../service/ariza.service"));
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    res.render('yangiliklar'), {
        layout: 'main'
    };
});
router.get('/admin', function (req, res) {
    res.render('enter');
});
router.get('/boglanish', function (req, res) {
    res.render('boglanish', {
        layout: 'main'
    });
});
router.get('/rahbariyat', function (req, res) {
    res.render('rahbariyat', {
        layout: 'main'
    });
});
router.get('/vazifalari', function (req, res) {
    res.render('vazifalari', {
        layout: 'main'
    });
});
router.get('/bolimlar', function (req, res) {
    res.render('bolimlar', {
        layout: 'main'
    });
});
router.get('/muassasa', function (req, res) {
    res.render('muas', {
        layout: 'main'
    });
});
router.get('/yangiliklar', function (req, res) {
    res.render('yangiliklar', {
        layout: 'main'
    });
});
router.get('/haqida', function (req, res) {
    res.render('haqida', {
        layout: 'main'
    });
});
router.get('/newsadmin', function (req, res) {
    res.render('news', {
        layout: 'index'
    });
});
router.get('/admin4868', function (req, res) {
    ariza_service_1["default"].findAll()
        .then(function (arizalar) { return res.render('arizalar', { layout: 'index', arizalar: arizalar }); })["catch"](function (error) { return res.render('arizalar', { error: error }); });
});
router.post('/admin', function (req, res) {
    var ariza = {
        id: 0,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        gender: req.body.gender,
        number: req.body.number,
        text: req.body.text
    };
    ariza_service_1["default"].create(ariza)
        .then(function (data) { return res.redirect('/boglanish'); })["catch"](function (error) { return res.render('arizalar', { error: error }); });
});
router.get('/delete/:id', function (req, res) {
    ariza_service_1["default"].RemoveAriza(+req.params.id)
        .then(function (data) { return res.redirect('/admin4868'); })["catch"](function (error) { return res.render('index', { error: error }); });
});
exports["default"] = router;
//# sourceMappingURL=ariza.routes.js.map