import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('HOLA MUNDO');
});

export default app;