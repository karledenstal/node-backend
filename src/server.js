const app = require("express")();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv-safe'); // use dotenv-safe to have a .env.example file
const connect = require("./db");
const articleRoutes = require("./modules/article.routes");

dotenv.config();

const port = process.env.PORT;

app.use(cors({ origin: "*" })); // * for dev purposes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  bodyParser.json({
    limit: process.env.BODY_PARSER_LIMIT,
  }),
);

app.use("/api/articles", articleRoutes);

app.listen(port, () => {
  console.log("app started on port", port);
  connect();
})