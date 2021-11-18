class Usuario{
    
    constructor(nombre, apellido, libros= [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascotas(mascota){
        this.mascotas.push(mascota)
        return this.mascotas;
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
        return this.libros;
    }
    getBookName(){
        return this.libros.map(libro => libro.nombre)
    }


}

let usuario1 = new Usuario('Juan', 'Perez', [], ['perro', 'gato']);

console.log('--------------------------------------------------------');
console.log(usuario1.getFullName());
console.log('--------------------------------------------------------');
console.log(usuario1.addMascotas('perro'));
console.log('--------------------------------------------------------');
console.log(usuario1.countMascotas());
console.log('--------------------------------------------------------');
console.log(usuario1.addBook('El señor de los anillos', 'Tolkien'));
console.log(usuario1.addBook('La mujer maravilla', 'Lewis'));
console.log(usuario1.addBook('Harry Potter','No sé autor'));
console.log('--------------------------------------------------------');
console.log(usuario1.getBookName());
