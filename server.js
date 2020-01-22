import app from './app';

const port = 3002;
app.listen(port, () => {
  console.log();
  console.log(`App rodando na porta${port}`);
  console.log(`CTRL + clique em http://localhost:${port}`);
});
