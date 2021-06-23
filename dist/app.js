"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const bluebird_1 = __importDefault(require("bluebird"));
const secrets_1 = require("./utils/secrets");
// Create Express server
const app = express_1.default();
// Connect to MongoDB
const mongoUrl = secrets_1.MONGODB_URI;
mongoose_1.default.Promise = bluebird_1.default;
mongoose_1.default
    .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log("Database is connected");
})
    .catch((err) => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});
// Express configuration
app.set("port", process.env.PORT || 8000);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_session_1.default({
    resave: true,
    saveUninitialized: true,
    secret: secrets_1.SESSION_SECRET,
    store: new connect_mongo_1.default({
        mongoUrl,
        mongoOptions: {
            autoReconnect: true,
        },
    }),
}));
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
// Bring in our routes list
require('./routes')(app);
app.use(express_1.default.static(path_1.default.join(__dirname + "public")));
exports.default = app;
//# sourceMappingURL=app.js.map