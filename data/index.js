import { GraphQLClient } from 'graphql-request' // GraphQL request client

// Create client
const client = new GraphQLClient(
    // Zora Aurora subgraph
    'https://api.thegraph.com/subgraphs/name/curaos/zora-on-aurora'
)

// Export client
export default client
