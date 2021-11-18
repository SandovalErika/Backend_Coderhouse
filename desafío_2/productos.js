const Contenedor = require('./contenedor.js');


const run = async function () { 
    const cc = new Contenedor();
    await cc.init();

    let lista = cc.getAll();
    console.log('Tamaño: ', lista.length);

    // let getById = cc.getById(1);
    // console.log('getById: ', getById);

    let id = await cc.save({nombre: 'Jose', edad: '25'});
    console.log('Nuevo item con ID: ', id);

    // await cc.deleteById(9);
    
    // await cc.deleteAll();


    
};
run()