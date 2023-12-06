const express = require('express');

const PORT = 8080;

const app = express();

app.use(express.static('public'));

const arrayDatos = [
    {dni: '39184560', nombre: 'Georgina ', apellido: 'Ferrante'}, 
    {dni: '40355338', nombre: 'Rocio ', apellido: 'Acosta'},
    {dni: '39072882', nombre: 'Ana ', apellido: 'Ceballos'},
    {dni: '19113795', nombre: 'Yilzaid ', apellido: 'Robles'},
    {dni: '39495666', nombre: 'Sofia ', apellido: 'Corzo'},
]

app.get('/buscar-dni', (req, res) => {
    const {dni} = req.query;
    const cliente = arrayDatos.find(cli => cli.dni === dni);

    if (!cliente) {
        res.status(404).send(`
        <h1>Usuario no encontrado</h1>
        `);
        return;
    }
    res.json(cliente)


     //  res.send(`
      // <h1> ${dni} </h1>`)
   

    // if(dni === '11222333') {
    //     res.send(`
    //     <h1> Pablo mendez </h1>
    //   `)
    // } else if(dni === '33444555'){
    //     res.send(`
    //     <h1> Carolina Pascual</h1>
    //   `)
    // } 
    // else if(dni === '22444000'){
    //     res.send(`
    //     <h1>Marcos Fernández</h1>
    //   `)
    // }
    // else{
    //     res.send(`
    //     <h1>Usuario no encontrado</h1>
    //   `)
    // }
 });





const server = app.listen(PORT, () => console.log(`Servidor Express escuchando en el puerto ${PORT}`));