import Express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = Express();

const port = process.env.PORT ?? 8000;

interface ApiObject {
  ok: boolean,
  msg: string
}

app.get('/', (_req, res) => {
  res.send('Hola Backend en Typescript');
});

app.get('/api', (_req, res) => {

  const apiStatus: ApiObject = {
    ok: true,
    msg: 'Todo esta bien, no se ha caido el backend'
  }

  if ( apiStatus.ok === true ){
    console.log()
  }

  res.status(200).json({
    ...apiStatus
  });
});

app.get('*', (_req, res) => {
  res.status(404).send('Not found')
})


app.listen(port, () => {
  console.log(`⚡️[server]: running in http://localhost:${port}`);
});
