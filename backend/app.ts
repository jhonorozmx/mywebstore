import { Server } from './server';
import { initializeDataBases } from './infrastructure/persistence';
import WinstonLogger from './infrastructure/WistonLogger';
import Logger from './infrastructure/Logger';
export class App {
  server?: Server;
  logger?: Logger;

    async start() {
        const port = process.env.PORT || '5000';
        this.logger = new WinstonLogger();
        this.server = new Server(port, this.logger);

        try {
            await this.server.listen();
            await initializeDataBases(this.logger);
        } catch (error) {
            this.logger.error(error as string);
        }
    }

    async stop() {
        return this.server?.stop();
    }

    get httpServer() {
        return this.server?.getHTTPServer();
    }
}
