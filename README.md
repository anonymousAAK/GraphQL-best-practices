Here are my notes for GRAPHQL

# GraphQL

- Overview
    
    GraphQL is a query language and runtime for APIs, while REST (Representational State Transfer) is an architectural style for building web services. Some key differences between the two include:
    
    - In REST, the shape of the data returned from an endpoint is fixed, while in GraphQL the client can request only the fields it needs.
    - With REST, the client must make multiple requests to different endpoints to retrieve all the necessary data, while with GraphQL a single request can retrieve multiple resources.
    - In GraphQL, the client has more control over the data that is returned, while in REST the server controls the data that is returned.
    
    Overall, GraphQL allows for more flexibility and efficiency in retrieving data from an API, as the client can request exactly the data it needs, while REST can be less flexible and require multiple requests to retrieve all necessary data.
    
    [https://graphql.org](https://graphql.org)
    
- First Query
    
    A simple GraphQL query to retrieve data from a server might look like this:
    
    ```graphql
    query {
      field1
      field2
      field3
    }
    ```
    
    This query requests the fields **`field1`**, **`field2`**, and **`field3`** from the server.
    
    It's important to note that the specific fields and their structure will depend on the schema of the GraphQL API you are querying. This is just a generic example.
    
    Also, GraphQL provides a query language that allows you to request specific fields on objects, and also allows you to traverse the relationships between those objects.
    
    For example, if you have a **`Book`** type with fields **`title`** and **`author`** and a **`Person`** type with fields **`name`** and **`age`**, you could query for the title of a book and the name of the author like this:
    
    ```graphql
    query {
      book(id: "123") {
        title
        author {
          name
        }
      }
    }
    ```
    
    This would return a JSON object with the title of the book and the name of the author.
    
    try on graphi
    
    [https://graphql.org/swapi-graphql?query=%23%20Welcome%20to%20GraphiQL%0A%23%0A%23%20GraphiQL%20is%20an%20in-browser%20tool%20for%20writing%2C%20validating%2C%20and%0A%23%20testing%20GraphQL%20queries.%0A%23%0A%23%20Type%20queries%20into%20this%20side%20of%20the%20screen%2C%20and%20you%20will%20see%20intelligent%0A%23%20typeaheads%20aware%20of%20the%20current%20GraphQL%20type%20schema%20and%20live%20syntax%20and%0A%23%20validation%20errors%20highlighted%20within%20the%20text.%0A%23%0A%23%20GraphQL%20queries%20typically%20start%20with%20a%20%22%7B%22%20character.%20Lines%20that%20start%0A%23%20with%20a%20%23%20are%20ignored.%0A%23%0A%23%20An%20example%20GraphQL%20query%20might%20look%20like%3A%0A%23%0A%23%20%20%20%20%20%7B%0A%23%20%20%20%20%20%20%20field(arg%3A%20%22value%22)%20%7B%0A%23%20%20%20%20%20%20%20%20%20subField%0A%23%20%20%20%20%20%20%20%7D%0A%23%20%20%20%20%20%7D%0A%23%0A%23%20Keyboard%20shortcuts%3A%0A%23%0A%23%20%20%20Prettify%20query%3A%20%20Shift-Ctrl-P%20(or%20press%20the%20prettify%20button)%0A%23%0A%23%20%20Merge%20fragments%3A%20%20Shift-Ctrl-M%20(or%20press%20the%20merge%20button)%0A%23%0A%23%20%20%20%20%20%20%20%20Run%20Query%3A%20%20Ctrl-Enter%20(or%20press%20the%20play%20button)%0A%23%0A%23%20%20%20%20Auto%20Complete%3A%20%20Ctrl-Space%20(or%20just%20start%20typing)%0A%23%0A%0A](https://graphql.org/swapi-graphql?query=%23%20Welcome%20to%20GraphiQL%0A%23%0A%23%20GraphiQL%20is%20an%20in-browser%20tool%20for%20writing%2C%20validating%2C%20and%0A%23%20testing%20GraphQL%20queries.%0A%23%0A%23%20Type%20queries%20into%20this%20side%20of%20the%20screen%2C%20and%20you%20will%20see%20intelligent%0A%23%20typeaheads%20aware%20of%20the%20current%20GraphQL%20type%20schema%20and%20live%20syntax%20and%0A%23%20validation%20errors%20highlighted%20within%20the%20text.%0A%23%0A%23%20GraphQL%20queries%20typically%20start%20with%20a%20%22%7B%22%20character.%20Lines%20that%20start%0A%23%20with%20a%20%23%20are%20ignored.%0A%23%0A%23%20An%20example%20GraphQL%20query%20might%20look%20like%3A%0A%23%0A%23%20%20%20%20%20%7B%0A%23%20%20%20%20%20%20%20field(arg%3A%20%22value%22)%20%7B%0A%23%20%20%20%20%20%20%20%20%20subField%0A%23%20%20%20%20%20%20%20%7D%0A%23%20%20%20%20%20%7D%0A%23%0A%23%20Keyboard%20shortcuts%3A%0A%23%0A%23%20%20%20Prettify%20query%3A%20%20Shift-Ctrl-P%20(or%20press%20the%20prettify%20button)%0A%23%0A%23%20%20Merge%20fragments%3A%20%20Shift-Ctrl-M%20(or%20press%20the%20merge%20button)%0A%23%0A%23%20%20%20%20%20%20%20%20Run%20Query%3A%20%20Ctrl-Enter%20(or%20press%20the%20play%20button)%0A%23%0A%23%20%20%20%20Auto%20Complete%3A%20%20Ctrl-Space%20(or%20just%20start%20typing)%0A%23%0A%0A)
    
- GraphQL vs REST
    
    REST (Representational State Transfer) and GraphQL are both ways to build APIs (Application Programming Interfaces) for web applications, but they have some key differences in terms of advantages and disadvantages.
    
    Advantages of REST:
    
    - REST is well-established and widely used, so there is a lot of existing knowledge and resources available for building and consuming REST APIs.
    - RESTful APIs are simple to understand, as they follow a standard set of conventions for URL structures and HTTP methods.
    - REST is a great choice for simple CRUD (Create, Read, Update, Delete) operations.
    
    Disadvantages of REST:
    
    - RESTful APIs are typically less flexible than GraphQL, as the client must make multiple requests to different endpoints to retrieve all the necessary data.
    - The shape of the data returned from a RESTful API is fixed, so the client may receive more data than it needs.
    - Caching is harder in REST than in GraphQL
    
    Advantages of GraphQL:
    
    - GraphQL allows the client to request exactly the data it needs, reducing the amount of data transferred over the network.
    - The client has more control over the data that is returned, which can be more efficient.
    - With GraphQL, a single request can retrieve multiple resources, reducing the number of round trips to the server.
    
    Disadvantages of GraphQL:
    
    - GraphQL is relatively new compared to REST, so there is less existing knowledge and resources available for building and consuming GraphQL APIs.
    - GraphQL requires a different way of thinking about building APIs, which can take some time to get used to.
    - GraphQL can be harder to cache than REST, as each request can contain multiple fields and the structure of the query can be more complex.
    
    In summary, REST is a good choice for simple CRUD operations and well-established, while GraphQL is more flexible and efficient, but requires a different way of thinking about building APIs.
    
    [https://www.graphql.org/learn/caching](https://www.graphql.org/learn/caching)
    
    use it with any programming language
    
    Some js — graphql.js
    
    Front end - [relay.dev](http://relay.dev) ,appologrphql
    
- Graphiql
    
    setting graphiql to true , 
    
    ```jsx
    const express = require('express');
    const {buildSchema} = require('graphql');
    const {graphqlHTTP} = require('express-graphql');
    const schema = buildSchema(`
        type Query {
            desciption: String
            price: Float 
        }
    `);
    const root = {
        descrpition : 'This is a product',
        price: 10.99
    };
    const app = express();
    app.use('/graphql' ,graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true //Integrated testing
    }));
     app.listen(3000, () => {
      console.log('GraphQL Server is running on port 3000');
    });
    ```
    
    GraphQl-tools.com
    
- Sample Ecommerce
    
    ```jsx
    const express = require('express');
    const {buildSchema} = require('graphql');
    const {graphqlHTTP} = require('express-graphql');
    
    const schema = buildSchema(`
        type Query {
            products: [Product]
            orders: [Order]
        }
        type Product {
            id: ID! 
            description: String!
            review: [Review]
            price: Float!
        }
        type Review {
            comment: String
            rating: Int!
        }
        type Order {
            date: String!
            subtotal: Float!
            items: [OrderItem]
        }
        type OrderItem {
            product: Product!
            quantity: Int!
        }
    `);
    const root = {
        products: [
            {
                id: 1,
                description: 'Product 1',
                price: 10.00,
            },
            {
                id: 2,
                description: 'Product 2',
                price: 20.00,
            },
        ],
        orders: [
            {
                date: '2020-01-01',
                subtotal: 30.00,
                items: [
                    {
                        product: {
                            id: 1,
                            description: 'Product 1',
                            price: 10.00,
                        },
                        quantity: 1,
                    }
                ]
            }
        ]
    }
    const app = express();
    
    app.use('/graphql' ,graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true //Integrated testing
    }));
    
     app.listen(3000, () => {
      console.log('GraphQL Server is running on port 3000');
    });
    ```
    
- Modularizing
    
    Modularizing a GraphQL API involves breaking it down into smaller, reusable pieces that can be easily managed and maintained. There are a few different ways to modularize a GraphQL API:
    
    1. Schema Modularity: This involves breaking down the schema into smaller, manageable pieces. This can be done by creating separate schema files for different types, or by grouping related fields into modules.
    2. Resolver Modularity: Resolvers are responsible for fetching the data for a particular field in the schema. By breaking resolvers into smaller, reusable functions, it makes it easier to manage and test them.
    3. Functional Modularity: This involves breaking down the overall functionality of the API into smaller, manageable chunks, and creating separate GraphQL endpoints for different functional areas.
    4. Code Modularity: This involves organizing the codebase into smaller, reusable modules. This can be done by creating separate npm packages for different parts of the API, such as the schema, resolvers, and models.
    
    By modularizing the API in these ways, it makes it easier to manage, test, and maintain the codebase over time. It also allows for better separation of concerns, which can improve the overall performance of the API and make it more scalable.
    
    ![Untitled](GraphQL%20295a20863a7b498e97d95218e0870776/Untitled.png)
    
    ```jsx
    //orders/graphql
    type Query {
      orders: [Order]
    }
    
    type Order {
      date: String!
      subtotal: Float!
      items: [OrderItem]
    }
    type OrderItem {
      product: Product!
      quantity: Int!
    }
    
    //orders/models.js
    module.exports = {
      orders: [
        {
          date: "2020-01-01",
          subtotal: 30.0,
          items: [
            {
              product: {
                id: 1,
                description: "Product 1",
                price: 10.0,
              },
              quantity: 1,
            },
          ],
        },
      ],
    };
    
    ```
    
- Resolvers
    
    In GraphQL, a resolver is a function that is responsible for fetching the data for a particular field in the schema. Each field in a GraphQL schema has a corresponding resolver function that is responsible for returning the data for that field.
    
    The resolver function takes in several arguments, such as the parent object, the arguments passed in the query, and the context object, which contains information about the current request. The resolver function then uses these arguments to fetch the data and return it to the client.
    
    Here's an example of a simple resolver function for a field **`title`** in a **`Book`** type:
    
    ```graphql
    const resolvers = {
      Book: {
        title: (parent, args, context) => {
          // fetch the data for the title field
          const title = getTitleFromDb(parent.id);
          return title;
        },
      },
    };
    ```
    
    In this example, the resolver function takes in the parent object (the **`Book`** object), the arguments passed in the query, and the context object. It uses the **`id`** from the parent object to fetch the title from a database, and then returns it.
    
    It's important to note that the resolver functions are responsible for fetching the data from the data source, it could be a database, a file, a third party api, or a in-memory data, depending on the architecture of the application.
    
    It's also worth mentioning that GraphQL allows you to use "default resolvers" for the fields that are not explicitly defined in the resolvers map. This way you can avoid writing resolvers for fields that just need to return the value of a property of the parent object.
    
- Mutation
    
    In GraphQL, a mutation is a type of operation that allows the client to change data on the server. Mutations are used to create, update, or delete data in the backend. They are similar to "write" operations in REST, such as POST, PUT and DELETE.
    
    A mutation in GraphQL is defined as a special field on the **`mutation`** type. Each field on the mutation type represents a single write operation, and takes in input arguments, and return a value.
    
    Here's an example of a mutation that creates a new book:
    
    ```graphql
    mutation {
      createBook(input: {title: "My new book", author: "John Doe"}) {
        book {
          title
          author
        }
      }
    }
    ```
    
    In this example, the **`createBook`** mutation takes in an input object with the title and author of the new book. The mutation then uses this input to create a new book in the backend, and returns an object representing the newly created book.
    
    It's important to notice that the input fields are defined in the GraphQL schema, which means the client can't send arbitrary data or fields.
    
    Also, the response of a mutation can return different fields depending on the result of the operation, for example, a mutation can return an error object if the mutation failed.
    
    Mutations are executed in a single transaction, so if one of the mutations fail, all the mutations fail.
    
    In summary, Mutations are used to create, update, or delete data in the backend, they are defined as a special field on the **`mutation`** type, and they take input arguments and return a value.
    
- Apollo GraphQL
    
    Apollo GraphQL is a set of tools and libraries for building and consuming GraphQL APIs. It provides a way to easily integrate GraphQL into your application, whether you're building a new app or adding GraphQL to an existing one.
    
    The core of Apollo is the Apollo Client, which is a JavaScript client for consuming GraphQL APIs. It provides a way to easily fetch data from a GraphQL server and manage that data in the client, including caching and offline support.
    
    Another important part of Apollo is the Apollo Server, which is a set of libraries for building GraphQL servers. It allows you to define your GraphQL schema, implement your resolvers, and handle authentication, authorization, and other server-side functionality.
    
    Apollo also provides additional tools such as:
    
    - Apollo Studio: A platform to collaborate, manage, and understand your GraphQL data
    - Apollo Engine: A service to monitor and improve the performance of your GraphQL APIs
    - Apollo Federation: A way to compose multiple GraphQL services into one graph, allowing to share types and fields across services.
    
    Apollo GraphQL is considered by many to be one of the best options for building and consuming GraphQL APIs due to several reasons:
    
    - Ease of use: Apollo provides a simple and consistent API for building and consuming GraphQL APIs, which makes it easy to get started and to maintain over time.
    - Performance: Apollo provides advanced features such as caching, pagination, and real-time updates to help optimize the performance of your GraphQL API.
    - Community: Apollo has a large and active community of developers who contribute to the development of the library, which means that it is always up-to-date with the latest features and best practices for GraphQL.
    - Flexibility: Apollo allows you to easily integrate GraphQL into your existing application, whether you're building a new app or adding GraphQL to an existing one.
    - Tooling: Apollo provides additional tools such as Apollo Studio and Apollo Engine to help improve the performance and management of your GraphQL API, which can save you a lot of time and effort.
    - Compatibility: Apollo works with a variety of frontend and backend frameworks and platforms, making it easy to integrate with your existing stack.
    
    Overall, Apollo GraphQL provides a powerful and flexible set of tools for building and consuming GraphQL APIs, which makes it a great choice for developers looking to take advantage of the benefits of GraphQL.
    
    - Apollo Client
        
        Apollo Client is a JavaScript client for consuming GraphQL APIs. It is a part of the Apollo GraphQL platform, which includes tools and libraries for building and consuming GraphQL APIs.
        
        The main features of Apollo Client are:
        
        - Automatic caching: Apollo Client automatically caches the results of GraphQL queries and keeps the cache up-to-date with real-time updates. This can greatly improve the performance of your application by reducing the number of round trips to the server.
        - Normalized data: Apollo Client automatically normalizes the data returned by the server, which makes it easy to work with and reduces the complexity of your code.
        - 9Query management: Apollo Client provides a way to easily manage your GraphQL queries, including fetching, updating, and subscribing to data.
        - Offline support: Apollo Client supports offline mode, which allows your application to continue working even when there's no internet connection.
        - Customizable: Apollo client provides a lot of hooks and options to customize the client according to the needs of the application.
            
            You can use Apollo Client with any JavaScript framework such as React, Angular, Vue, or even with vanilla JavaScript.
            
            Getting started with Apollo Client is easy, you just need to install the package and configure it with the GraphQL endpoint and you're ready to go.
            
            In summary, Apollo Client is a powerful and easy-to-use JavaScript client for consuming GraphQL APIs. It provides features such as automatic caching, normalized data, query management, offline support, and it's customizable. It is compatible with most of the javascript frameworks, which makes it a great choice for developers looking to consume GraphQL APIs in their JavaScript application.
            
        
    - Appolo Server
        
        Apollo Server is a set of libraries for building GraphQL servers. It allows you to define your GraphQL schema, implement your resolvers, and handle authentication, authorization, and other server-side functionality. It's compatible with various Node.js HTTP frameworks such as Express, Koa and Hapi, and also with other platforms such as AWS Lambda.
        
        Apollo Server provides a simple and flexible API for building GraphQL servers, making it easy to get started and to maintain over time. Some of the features of Apollo Server include:
        
        - Automatic schema stitching: it allows you to easily combine multiple GraphQL schemas into a single schema, which is useful when you want to split your schema across multiple services or microservices.
        - Data sources: it allows you to define data sources that can be used by your resolvers, to separate the concerns between the business logic and the data fetching.
        - Built-in support for subscriptions: it allows you to easily add real-time functionality to your GraphQL server, using web sockets.
        - Plug-in architecture: it provides a way to easily extend and customize the functionality of your GraphQL server using a variety of available plugins or by creating your own.
        - Secure: it provides built-in support for authentication, authorization, and other security features, making it easy to secure your GraphQL server.
        
        Apollo Server also provides additional tools such as the Apollo Server playground, which is a web-based tool for testing and debugging your GraphQL server, and the Apollo Server Engine, which is a service for monitoring and improving the performance of your GraphQL server.
        
        In summary, Apollo Server is a set of libraries for building GraphQL servers. It provides features such as automatic schema stitching, data sources, built-in support for subscriptions, plug-in architecture, and built-in security. It's compatible with various Node.js HTTP frameworks and platforms, making it a great choice for developers looking to build GraphQL servers.