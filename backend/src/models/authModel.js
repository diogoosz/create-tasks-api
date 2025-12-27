const db = require("./connection");

const registerUserModel = async (userData) => {
  const conn = await db.getConnection();
  try {
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    const [userResult] = await conn.execute(query, [
      userData.name,
      userData.email,
      userData.password,
    ]);
    const userId = userResult.insertId;
    return {
      name: userData.name,
      id: userId,
    };
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
    throw err;
  } finally {
    conn.release();
  }
};

const findUserByEmail = async (email) => {
  const conn = await db.getConnection();
  try {
    const query = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await conn.execute(query, [email]);
    return rows[0];
  } finally {
    conn.release();
  }
};

module.exports = {
  registerUserModel,
  findUserByEmail,
};
