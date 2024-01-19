import app from "@app/app";
import logger from "@utils/logger";
import { createServer } from "http";

const server = createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  logger.info(`Express backend running on port ${port}`);
});
