
const http = require('http');

http.createServer((req, res)=>{

    //res.writeHead(200,{'Content-Type': 'text/plain'})
    //res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    //res.writeHead(200,{'Content-Type': 'application/csv'});

    /* const persona ={
        id: 1,
        nombre: 'Ronal'
    } */

    res.write('hola mundo');
    


    res.end();
})

.listen(8080);

console.log('Escuchando el puerto', 8080);