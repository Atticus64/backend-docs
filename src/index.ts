import app from './app';
import db from './config/database';

import './models/User.models';
import './models/Comment.models';

const port = process.env.PORT ?? 8000;
async function connect() {
  try {
    await db.authenticate();
    await db.sync({ force: true });
    app.listen(port);
    console.log('EL SERVIDOR A REVIVIDO ');
    console.log(`Servidor corriendo en ⚡️ http://localhost:${port}`);
  } catch (error) {
    console.log('EL SERVIDOR CAYO, "MENOS UNA VIDA" 💔💔');
    console.log(error);
  }
}

connect();
