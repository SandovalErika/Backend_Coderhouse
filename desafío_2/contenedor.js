const fs = require('fs');

class Contenedor {

    constructor() {
        console.log("Inicializando contenedor");
        
    }

    static countID = 0;
    static file = "contenedor.json"
    static lista = []                      

    async save (objeto) {
        Contenedor.countID++;
        objeto['id'] = Contenedor.countID;

        Contenedor.lista.push(objeto);

        await this.write();

        return Contenedor.countID;
    }

    async deleteById(id){
        Contenedor.lista = Contenedor.lista.filter(element => element.id != id);
        await this.write();
    }

    async deleteAll(){ 
        Contenedor.lista = [];
        await this.write();
    }
    
    async write(){

        await fs.promises.writeFile(Contenedor.file, JSON.stringify(Contenedor.lista));
    }

    getAll(){
        return Contenedor.lista;
    }

    getById(id){
        return Contenedor.lista.find(element => element.id == id);
    }

    async init(){
        try{
            let data = await fs.promises.readFile(Contenedor.file);
            Contenedor.lista = JSON.parse(data)
            
            for (const element of Contenedor.lista) {
                if(element.id > Contenedor.countID){
                    Contenedor.countID = element.id;
                }
            }
            
            console.log("Last ID: ", Contenedor.countID );
        }catch(err){
            console.log("Aun no hay archivo");
        }
        
    }
}

module.exports = Contenedor;

// let contenedor = new Contenedor2()
// contenedor.save({nombre: "Juan", edad: 20})
// contenedor.save({nombre: "Pedro", edad: 30})