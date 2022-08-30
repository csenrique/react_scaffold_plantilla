const express = require('express');
const morgan = require('morgan');
const app = express();


const users = [
    {
        name: 'Pedro'
    },
    {
        name: 'Antonio'
    },
    {
        name: 'Alejandro'
    }
 ];


app.use(morgan('dev'));

app.get('/api/users', (req, res) => {
    res.json({
        users: users
    });
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('Server Listen on Port', 3000)
});