import * as express from 'express';

const app: express.Express = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(200, 'Hello, world!');
});

app.listen(3000, () => {
  console.info('Mock api server is listening on 3000 port...');
});