const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");

const app = express();
const port = 3301;

app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
