const fs = require('fs')


const contenedor = {

    save: function(id) {

        let saveProducts = [
            {id: 1, title: 'Cuaderno', price: 100, description: 'Cuaderno para escribir, cuadriculado, 24 hojas'},
            {id: 2, title: 'Lapiz', price: 10, description: 'Lapiz para escribir, color'},
            {id: 3, title: 'Borrador', price: 5, description: 'Borrador para escribir, color'},
            {id: 4, title: 'Grapadora', price: 50, description: 'Grapadora para escribir, color'},
        ];

        fs.writeFileSync('productosEscolares.json', JSON.stringify(saveProducts));
        
        return saveProducts.find(product => product.id === id); 
    },

    getById: function(id) {
        let productos = fs.readFileSync('productosEscolares.json', 'utf-8')
        return JSON.parse(productos).find(product => product.id === id);
    },

    getAll: JSON.parse(fs.readFileSync('productosEscolares.json', 'utf-8')),


    deleteById: function(id) {
        this.getAll.splice(this.getAll.findIndex(producto => producto.id === id), 1);
        return fs.writeFileSync('productosEscolares.json', JSON.stringify(this.getAll));
    },

    deleteAll: function() {
        this.getAll = [];
        return fs.writeFileSync('productosEscolares.json', JSON.stringify(this.getAll));
    }
}


console.log('----------------------------------------------------------------');
// console.log(contenedor.save(2));

console.log('----------------------------------------------------------------');

// console.log(contenedor.getById(4));

console.log('----------------------------------------------------------------');

// console.log(contenedor.getAll);

console.log('----------------------------------------------------------------');

// contenedor.deleteById(2);

console.log('----------------------------------------------------------------');

// contenedor.deleteAll();