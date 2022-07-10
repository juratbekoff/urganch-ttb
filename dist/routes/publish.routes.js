"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var publish_service_1 = __importDefault(require("../service/publish.service"));
var uuid_1 = require("uuid");
var multer_1 = __importDefault(require("multer"));
var handlerError_1 = require("../handlerError");
var router = (0, express_1.Router)();
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, (0, uuid_1.v4)() + '.png');
    }
});
var upload = (0, multer_1["default"])({ storage: storage });
router.post('/newsadmin', upload.single('img'), function (req, res) {
    var file = req.file;
    var publish = {
        id: 0,
        img: file.filename,
        date: req.body.date,
        message: req.body.message
    };
    publish_service_1["default"].publishMessage(publish)
        .then(function (published) { return res.redirect('/yangiliklar'); })["catch"](function (err) { return res.status(500).send((0, handlerError_1.handlerError)(err)); });
});
router["delete"]('/all', function (req, res) {
    publish_service_1["default"].deletePublishedMsg()
        .then(function (deleted) { return res.send({ message: 'All messages deleted Sirojbek!', deleted: deleted }); })["catch"](function (err) { return res.status(500).send((0, handlerError_1.handlerError)(err)); });
});
router["delete"]('/jurat/:id', function (req, res) {
    publish_service_1["default"].deleteMsgById(+req.params.id)
        .then(function (deleted) { return res.send({ message: 'This message is deleted Sirojbek!', deleted: deleted }); })["catch"](function (err) { return res.status(500).send((0, handlerError_1.handlerError)(err)); });
});
router.get('/newsadmin', function (req, res) {
    publish_service_1["default"].getAll()
        .then(function (news) { return res.render('yangiliklar', { layout: 'main', news: news }); })["catch"](function (error) { return res.render('yangiliklar', { error: error }); });
});
exports["default"] = router;
//# sourceMappingURL=publish.routes.js.map