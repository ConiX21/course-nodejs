
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var app = express();
var database = null;

app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//mongodb api
MongoClient.connect('mongodb://localhost:27017/db_products', function (err, db) {
    if (err) {
        throw err;
    }
    database = db;
});

app.get('/api/products', function (req, res) {
    database.collection('products').find().toArray(function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);

        res.send(result);
    });
});

app.get('/api/products/page/:page', function (req, res) {

    var pageParam = parseInt(req.params['page']);

    if ((pageParam - 1) <= 0) {
        pageParam = 0;
    }
    else {
        pageParam = pageParam - 1;
    }

    database.collection('products')
        .find()
        .sort({ created_at: -1 })
        .skip(pageParam * 5)
        .limit(5).toArray(function (err, result) {
            if (err) {
                throw err;
            }

            if (result.length <= 0)
                res.send(404, { "result": "Not found" });
            else
                res.send(200, result);
        });
});

app.get('/api/products/count', function (req, res) {
    var count = database.collection('products').count({}, function (err, count) {
        res.send({ "count": count });
    });


});

app.get('/api/products/:id', function (req, res) {
    var idParams = req.params['id'];

    if (idParams === null || idParams < 1) {
        res.status(500).send('Cannot find product for id ' + idParams);
    } else {
        database.collection('products').find({ idProduct: parseInt(idParams) }).toArray(function (err, result) {
            if (err) {
                throw err;
            }

            if (result.length <= 0) {
                res.status(500).send('Cannot find product for id ' + idParams);
            } else {
                res.send(result[0])
            }
        });
    }
});

app.post('/api/products', function (req, res) {
    var product = req.body;
   
    database.collection('products').count({}, function (err, countValues) {
        //var count = countValues;
       
        product.idProduct = countValues++;

        if (product === null) {
            res.status(500).send('Cannot add product ');
        } else {
            try {
                database.collection('products').insertOne(product)
                res.send(product);
            } catch (e) {
                res.status(500).send('Cannot insert product' + e);
            };
        }
    });
});

//app start
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});