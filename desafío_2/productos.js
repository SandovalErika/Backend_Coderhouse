const Contenedor = require('./contenedor.js');


const run = async function () { 
    const cc = new Contenedor();
    await cc.init();

    let lista = cc.getAll();
    console.log('Tamaño: ', lista.length);

    // let id = await cc.save({nombre: 'Jose', edad: '25'});
    // console.log('Nuevo item con ID: ', id);

    cc.deleteById(5);
    lista = cc.getAll();
};
run()