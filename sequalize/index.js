var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

const Sequelize = require('sequelize');
const sequelize = new Sequelize('products_db', 'nico', 'Nico1234!', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

const Produit = sequelize.define('produit',
  {
    idProduit: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    reference: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    prix: {
      type: Sequelize.DECIMAL
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    tableName: "produits"
  });

//  console.log(sequelize);
app.get("/api/product", function (req, res) {
  Produit.all().then(produits => {
    res.status(200).send(produits);
  })
})

//  console.log(sequelize);
app.get("/api/product/all/:id", function (req, res) {
  console.log("ojk");
  Produit.findAll({ where: { idProduit: 2 } }).then(produits => {
    res.status(200).send(produits);
  })
})

app.get("/api/product/:id", function (req, res) {
  var id = req.params["id"];
  Produit.findById(id).then(produits => {
    res.status(200).send(produits);
  })
})

app.post("/api/product", function (req, res) {

  const produit = Produit.build(req.body);
  console.log(produit);
  produit.save().then((p) => {
    res.status(200).send(p);
  }).catch((err) => {
    res.status(200).send({ "message": err });
  })
});

app.put("/api/product/:id", function (req, res) {
  var produit = null;
  var id = req.params["id"];
  Produit.findById(id).then(prod => {
    produit = Produit.build(prod);


    if (produit != null) {
      produit.update(req.body).then((p) => {
        res.status(200).send(p);
      })
    }
  
  });
  //res.status(200).send();
});

app.listen(3000, function () {
  console.log("http://localhost:3000");
})


