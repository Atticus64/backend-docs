import Express from 'express';

const app = Express();

interface ApiObject {
  ok: boolean;
  msg: string;
}

app.get('/', (_req, res) => {
  res.send('Hola Backend en Typescript');
});

app.get('/api', (_req, res) => {
  const apiStatus: ApiObject = {
    ok: true,
    msg: 'Todo esta bien, no se ha caído el backend',
  };

  if (apiStatus.ok === true) {
    console.log();
  }

  res.status(200).json({
    ...apiStatus,
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

export default app