import app from '@app/app';
import {createServer} from 'http';

const server = createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`Express backend running on port ${port}`)
})
