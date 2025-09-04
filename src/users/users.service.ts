export class UsersService {

    async create (data: any)  {
        return data
    }

    async findAll ()  {
        return "Desde find all"
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