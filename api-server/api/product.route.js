
var Product = require('./models/product.model').Product;

module.exports = (function () {
    function RouteProduct(app, mongoose) {
        this.routePath = '/api/product';
        this.app = app;
        this.routesRegister();
        this.database = null;
        
        mongoose.connect('mongodb://localhost:27017/products_db');
        this.database = mongoose.connection;

        this.database.on('error', console.error.bind(console, 'connection error:'));
        this.database.once('open', function () {
            console.log("database connected");
        });
      
    }

    RouteProduct.prototype.routesRegister = function () {
        this.app.get(`${this.routePath}`, function (req, res, next) {

            Product.find().exec(function(err,data){
                if (err){
                    res.send(400, { "message": err });
                }
        
                res.send(data);
            });

        });

        this.app.get(`${this.routePath}/:id`, function (req, res, next) {
            var id = req.params["id"];
            Product.findOne().where({"idProduct" : id}).exec(function(err,data){
                if (err){
                    res.send(400, { "message": err });
                }
        
                res.send(data);
            });
        });

        //POST : /api/product
        this.app.post(`${this.routePath}`, function (req, res, next) {

            var product = new Product(req.body);
            product.save(function(err){
                if (err){
                    res.send(400, { "message": err });
                }
        
                res.send(product);
            });
        });

        //PUT : /api/product
        this.app.put(`${this.routePath}`, function (req, res, next) {
            res.send({ "p": 'product_id' });
        });

        //PUT : /api/product
        this.app.delete(`${this.routePath}/:id`, function (req, res, next) {
            var id = req.params["id"];
            Product.remove({ idProduct: id }, function (err) {
                if (err) 
                    res.send(400, { "message": err });

                    res.send({ "message": `Product ${id} was removed` });
              });
        });
    }

    return RouteProduct;
})();



