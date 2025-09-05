import { MongoDB } from "./common/database/mongodb/mongodb-connect";
import { AppServer } from "./server";


function bootstrap(){
    //* Run mongodb
    new MongoDB().connect();

    //* Run server
    const server = new AppServer();

    server.start();
}

bootstrap();