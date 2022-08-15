const express = require('express');
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.get('/', (req, res) => {
    const { id } = req.params;
    res.render('home');
}); 

server.use(express.static('./img'));
server.use(express.static('./static'));

const getArticle = (id) => {
    const db = [
        {id: 1, Model: 'Motorola E7', Price: 4699, Memory: 64, Color: 'blue' },
        {id: 2, Model: 'Xiaomi 11T', Price: 15999, Memory: 256, Color: 'gray' },
        {id: 3, Model: 'Samsung M526', Price: 14500, Memory: 128, Color: 'black' },
        {id: 4, Model: 'Samsung G998', Price: 35400, Memory: 128, Color: 'blue' },
        {id: 5, Model: 'Samsung G780', Price: 18900, Memory: 256, Color: 'gray' }
    ];

    const result = db.find(item => item.id === id);
    return result;
}
server.get('/phone/:id', (req, res) => {
    const { id } = req.params;
    const phone = getArticle( Number(id) );
    const vars = { title: phone.Model, content: phone.Memory, };
    res.render('dz', vars);
}); 
server.listen(3000);