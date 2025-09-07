import express from "express";
import membersRoutes from './routes/members.js';
import albumRoutes from './routes/albums.js'
import songsRoutes from './routes/songs.js'
import videosRoutes from './routes/musicVideos.js'
import sequelize from "./config/database.js";
import { swaggerDocs } from "./config/swagger.js";

const app = express();
const port = process.env.PORT;

sequelize.sync()
  .then(() => console.log("Database connected & models synced"))
  .catch(err => console.error("Error DB:", err));

app.use('/api/members', membersRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/songs', songsRoutes);
app.use('/api/mv', videosRoutes);

app.get('/', (_req, res) => {
  res.send('Welcome to the NewJeans API!');
});

swaggerDocs(app);

app.listen(port, () => {
  console.log(`Example server listening on port ${port}`)
})
