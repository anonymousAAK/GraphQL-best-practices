const productsModel = require('./products.model');
const { addnewProduct } = require('./products.models');

module.exports = {
    Query: {
        products: () => {
            return productsModel.getAllProducts();
        },
            // product: async (parent,args,context,info) => {
            //parent - parent object
            //args - parameterized query , filter
            //context - authentication data
            //info - query information 
        productsByPrice: (_, args, _, _) => {
            return productsModel.getproductsByPrice(args.minPrice, args.maxPrice);
        },

        productById: (_, args, _, _) => {
            return productsModel.getproductById(args.id);
        }
    },
    Mutation: {
        addnewProduct: (_, args, _, _) => {
            return productsModel.addnewProduct(args.id, args.description, args.price);
        },

        addnewProductReview: (_, args, _, _) => {
            return productsModel.addnewProductReview(args.productId, args.review);
        }
    },

}
