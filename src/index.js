import express from "express";
import membersRoutes from './routes/members.js';
import sequelize from "./config/database.js";
const app = express();
const port = process.env.PORT;

sequelize.sync()
  .then(() => console.log("Database connected & models synced"))
  .catch(err => console.error("Error DB:", err));

app.use('/api/members', membersRoutes);

app.get('/', (_req, res) => {
  res.send('Welcome to the NewJeans API!');
});

app.listen(port, () => {
  console.log(`Example server listening on port ${port}`)
})
