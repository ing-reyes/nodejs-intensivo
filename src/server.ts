import express from 'express';
import { logger } from './common/loggers/logger';
import { FactoryRoutes } from './facotory.routes';

export class AppServer {
    public app = express();

    start() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use("/", FactoryRoutes.routes);

        this.app.listen(3000, () => {
            logger.log(`Server running on port ${3000}`, "AppServer")
        });
    }
}