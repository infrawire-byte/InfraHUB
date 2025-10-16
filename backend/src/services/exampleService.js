const db = require('../config/database');

async function listExamples() {
  const rows = await db.query('SELECT id, name, description FROM modules ORDER BY name LIMIT 25');
  return rows;
}

async function getExampleById(id) {
  const rows = await db.query('SELECT id, name, description FROM modules WHERE id = ? LIMIT 1', [id]);
  return rows[0] || null;
}

async function createExample(payload) {
  const { name, description } = payload;
  await db.query('INSERT INTO modules (name, description) VALUES (?, ?)', [name, description]);
  const rows = await db.query('SELECT id, name, description FROM modules WHERE name = ? ORDER BY id DESC LIMIT 1', [name]);
  return rows[0] || null;
}

module.exports = {
  listExamples,
  getExampleById,
  createExample,
};
