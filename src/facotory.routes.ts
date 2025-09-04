import { Router } from "express";
import { UsersRoutes } from "./users/users.routes";

export class FactoryRoutes {

     static get routes(): Router{
        const router = Router()
        
        //! RUTAS PRINCIPALES
        //* http://localhost:3000/users
        router.use("/users", UsersRoutes.routes);
        
        return router;
    }
}