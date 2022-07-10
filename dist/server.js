"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var express_handlebars_1 = require("express-handlebars");
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var ariza_routes_1 = __importDefault(require("./routes/ariza.routes"));
var app = (0, express_1["default"])();
app.use(express_1["default"].static(path_1["default"].join(__dirname, '../public')));
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.engine('.hbs', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use('/', ariza_routes_1["default"]);
app.listen(process.env.PORT || 9090, function () {
    console.log("Started on localhost:9090");
});
//# sourceMappingURL=server.js.map