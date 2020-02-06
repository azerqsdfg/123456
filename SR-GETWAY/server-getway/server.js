const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require("@apollo/gateway");


const gateway = new ApolloGateway({
  serviceList: [
    { name: 'SR-TABLE-INFO', url: 'http://localhost:4002' },
    { name: 'SR-ATTACK', url: 'http://localhost:4001' },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
  // context: async ({ req, res }) => {
  //   // return { req}
  // },
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});