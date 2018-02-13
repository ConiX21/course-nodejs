var mongoose = require('mongoose');

var schemaProduct = new mongoose.Schema(
    {
        idProduct: 'number',
        description: 'string',
        reference: 'string',
        price: 'number'
    },{versionKey: false }
);

    module.exports.Product = mongoose.model('Product', schemaProduct);