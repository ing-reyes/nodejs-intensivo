import { UserModel } from "../common/database/mongodb/models/user.model"
import { logger } from "../common/loggers/logger";

export class UsersService {

    async create (data: any)  {
        
        try {
            const user = await UserModel.create(data);
            if( !user ){
                throw new Error("Usuario no creado");
            }

            await user.save();

            return user;
        } catch (error) {
            logger.error(`${error}`);
            throw error;
        }
    }

    async findAll ()  {
        try {
            return await UserModel.find();
        } catch (error) {
            logger.error(`${error}`);
            throw error;
        }
    }

    async update (id: string, data: any)  {
        return "Desde update"
    }

    async findOne (id: string)  {
        return "desde findOne"
    }

    async remove (id: string)  {
        return "desde remove"
    }
}