var express = require('express')
var app = express();
app.use(express.json());

let data = [];

app.get('/', function (req, res) {
    res.send(data)
});

app.post('/', function (req, res) {
    data.push(req.body);
    res.send(data);
});

app.put('/:id', function (req, res) {
    const ind = data.findIndex((o) => o.id == req.params.id);
    if (ind >= 0) {
        data[ind] = req.body;
    }
    res.send(data)
});

app.delete('/:id', function (req, res) {
    const ind = data.findIndex((o) => o.id == req.params.id);
    if (ind >= 0) {
        data = data.filter(i => i.id !== req.params.id);
    }
    res.send(data)
});

app.listen(2020, function () { console.log('app is running'); })