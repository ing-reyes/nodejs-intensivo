//* Herencia
//* Abstraccion
//* Encapsulamiento
//* Polimorfismo

abstract class UsersServiceRepository {
    abstract create(data: any): void;
    abstract findAll(): any[];
    abstract findOne(id: string): any;
    abstract update(id: string, data: any): any;
    abstract remove(id: string): any;
}

class Vehiculo{
    move(){
        console.log("Estoy estacionado")
    }
}

class Carro extends Vehiculo {
    move(){
        console.log("Hola, estoy corriendo")
    }
}

class Avion extends Vehiculo {
    move(){
        console.log("Hola, estoy volando")
    }
}

class Moto extends Vehiculo {
    move(){
        console.log("Hola, estoy levantando caballito")
    }
}

const avion = new Avion().move()
const carro = new Carro().move()
const moto = new  Moto().move()




class Server{
    start(){}
    end(){}
    ports(){}
    connectDatabase(){}
    cualquierCosa(){}
}

class UsersService implements UsersServiceRepository {

    private users = [
        {id: 1, name: "gilharyth"},
        {id: 2, name: "jickselys"},
    ];

    constructor( private readonly server:  Server ){}

    create(data: any): void {
        this.users.push(data)
    }
    findAll(): any[] {
        return this.users
    }
    findOne(id: string) {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: any) {
        throw new Error("Method not implemented.");
    }
    remove(id: string) {
        throw new Error("Method not implemented.");
    }
}

const server = new Server()
const userService = new UsersService(server);

console.log( userService.create({id: 3, name: "luis"}) )
console.log( userService.findAll() )

