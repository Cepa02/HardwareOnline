const express = require("express");
const conectarDb = require("./config/db");
const app = express();
conectarDb();
app.use(express.json({extend:true}));

const port = process.env.PORT || 4000;

app.use("/api/productos", require("./routes/productos"));

app.listen(port, "0.0.0.0", () => {
    console.log(`server corriendo en ${port}`);
});