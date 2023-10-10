const express = require("express");
const cors = require("cors");
const mysql = require("mysql");


const app = express();
const port = 3301;

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tpes123",
  database: "fasttrade",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.post("/register", (req, res) => {

  console.log('Requisição de registro recebida');

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
});


app.post("/login", (req, res) => {

  console.log('Requisição de login recebida');

  const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
  const values = [req.body.email, req.body.password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Erro ao logar:", err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }

    if (data.length > 0) {
      // User with provided credentials found
      const name = data[0].name;
      const user_id = data[0].user_id;
      console.log("Usuário autenticado com sucesso");
      return res.status(200).json({ success: true, message: "User authenticated successfully", name , user_id});
   
    } else {
      // No user found with provided credentials
      console.log("Credenciais inválidas");
      return res.status(401).json({ error: "Credenciais inválidas" });
    }
  });
});

app.post('/user-products/', (req, res) => {

  console.log('Requisição de anúncio recebida');

  const sql = "INSERT INTO products (`quantity`, `product_owner_id`,`product_name`, `description`, `price`, `image`) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [req.body.quantity, req.body.product_owner_id, req.body.product_name, req.body.description, req.body.price, req.body.image];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Erro ao adicionar produto:", err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }

    console.log("Produto adicionado com sucesso");
    return res.status(200).json({ message: "Produto adicionado com sucesso" });
  });

});

app.put('/update-user/:userId', (req, res) => {
  const userId = req.params.userId;
  const { name, email, username, banner, profilepic, phonenumber, description } = req.body;

  const sql = "UPDATE users SET `name` = ?, `email` = ?, `username` = ?, `banner` = ?, `profilepic` = ?, `phonenumber` = ?, `description` = ? WHERE `user_id` = ?";
  const values = [name, email, username, banner, profilepic, phonenumber, description, userId];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Erro ao atualizar usuário:", err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }

    if (data.affectedRows === 0) {
      // If no rows were affected, the user with the given ID was not found
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    console.log("Usuário atualizado com sucesso");
    return res.status(200).json({ message: "Usuário atualizado com sucesso" });
  });
});


app.get('/user/:id', async (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM users WHERE user_id = ${id} LIMIT 1`;

  db.query(sql, (err, data) => {
    if (err) {
      console.error("Erro ao encontrar informações do usuário:", err);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  
    if (data.length === 0) {
      console.log("Usuário não encontrado");
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
  
    console.log("Usuário encontrado");
    console.log(data);
    // data.profilepic = `data:${data.profilepic};base64,${data.profilepic.toString('base64')}`
    // data.banner = `data:${data.banner};base64,${data.banner.toString('base64')}`
    return res.status(200).json({ user: data });
  });
});

app.get('/user-products/:userId', (req, res) => {
  const userId = req.params.userId;

  const sql = "SELECT * FROM products WHERE product_owner_id = ?";
  const values = [userId];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    console.log("Products fetched successfully");
    return res.status(200).json(data);
  });
});


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
