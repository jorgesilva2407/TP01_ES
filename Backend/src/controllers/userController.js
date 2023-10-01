const db = require("../config");

// Controller para registrar usuários
exports.registerUser = (req, res) => {
  const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Erro ao registrar usuário:", err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }

    console.log("Usuário registrado com sucesso");
    return res.status(200).json({ message: "Usuário registrado com sucesso" });
  });
};
