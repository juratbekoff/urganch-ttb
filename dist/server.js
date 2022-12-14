"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var express_handlebars_1 = require("express-handlebars");
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var router_1 = __importDefault(require("./routes/router"));
require('dotenv').config();
var app = (0, express_1["default"])();
app.use(express_1["default"].static(path_1["default"].join(__dirname, '../public')));
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.engine('.hbs', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use('/', router_1["default"]);
var port = process.env.PORT;
app.listen(port || 8085, function () {
    console.log("Server is running on ".concat(port));
});
//# sourceMappingURL=server.js.map