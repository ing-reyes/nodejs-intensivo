import { Router } from "express";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

export class UsersRoutes {

    static get routes(): Router {
        const router = Router();
        const usersService = new UsersService();
        const usersController = new UsersController(usersService);

        //! USERS
        //* http://localhost:3000/users
        router.get("/", usersController.findAll );
        router.get("/:id", usersController.findOne );
        router.post("/", usersController.create );
        router.patch("/:id", usersController.update );
        router.delete("/:id", usersController.remove );

        return router;
    }
}