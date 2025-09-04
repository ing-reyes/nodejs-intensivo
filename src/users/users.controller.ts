import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {
    
    constructor(
        private readonly usersService : UsersService,
    ){}

    create = (req: Request, res: Response)=>{
        const body = req.body;
        
        this.usersService.create( body )
        .then(user=> res.json(user) )
        .catch(error=> res.json(error) )
    }

    findAll = (req: Request, res: Response)=>{
        
        this.usersService.findAll()
        .then(user=> res.json(user) )
        .catch(error=> res.json(error) )
    }

    update = (req: Request, res: Response)=>{
        this.usersService.update(req.params.id!, req.body!)
        .then(user=> res.json(user) )
        .catch(error=> res.json(error) )
    }

    findOne = (req: Request, res: Response)=>{
        this.usersService.findOne(req.params.id!)
        .then(user=> res.json(user) )
        .catch(error=> res.json(error) )
    }

    remove = (req: Request, res: Response)=>{
        this.usersService.remove(req.params.id!)
        .then(user=> res.json(user) )
        .catch(error=> res.json(error) )
    }
}