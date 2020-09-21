const app = require("express")();
const router = require("./routes")
const middlewares = require("./middlewares");



const  cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use("/api/timestamp", router);


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(process.env.PORT || 4242, () => {
    console.log("Server launched")
})