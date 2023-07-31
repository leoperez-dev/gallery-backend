import express from 'express';
import cors from 'cors';
import routes from './routes';

const port = process.env.PORT || 3000;

const server = express();

server.use(cors());

server.use('/gallery/', routes.gallery);

server.listen(port, () => {
	console.log('App listening on port ' + port);
});

export default server;