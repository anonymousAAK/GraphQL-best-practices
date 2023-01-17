const productsModel = require('./products.model');

module.exports = {
        Query: {
            products:  () => {
                return productsModel.getAllProducts();
            }
            // product: async (parent,args,context,info) => {
            //parent - parent object
            //args - parameterized query , filter
            //context - authentication data
            //info - query information 
        },
        productsByPrice:  (_,args,_,_) => {
            return productsModel.getproductsByPrice(args.minPrice,args.maxPrice);
        },

        productById:  (_,args,_,_) => {
            return productsModel.getproductById(args.id);
        }
    }