import mongoose from 'mongoose';
import { logger } from '../../loggers/logger';

export class MongoDB {

    async connect() {
        try {
            await mongoose.connect(
                "mongodb://intensivo:secret123456@localhost:27017",
                { dbName: "intensivo" }
            );
    
            logger.log("Mongodb connect", "MongoDB");
        } catch (error) {
            logger.error(`${error}`, "MongoDB");
        }
    }
}