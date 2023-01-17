const path = require('path');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const { loadFilesSync } = require("@graphql-tools/load-files");
const {makeExecutableSchema} = require('@graphql-tools/schema');

const app = express();
const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray =  loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));


const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
})



app.use('/graphql' ,graphqlHTTP({
    schema: schema,

    graphiql: true //Integrated testing
}));

 app.listen(3000, () => {
  console.log('GraphQL Server is running on port 3000');
}); 