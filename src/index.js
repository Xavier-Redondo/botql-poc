const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutation');

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'generated/prisma.graphql',
      endpoint: 'http://localhost:4466/bootqlbd/dev',
      secret: 'mysecret123',
      debug: true
    })
  })
});

const options = {
  port: 4444,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
  debug: true
};

server.start(options, ({ port }) =>
  console.log(`Server is running on port ${port}`)
);
