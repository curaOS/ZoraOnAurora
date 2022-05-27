import { GraphQLClient } from 'graphql-request' // GraphQL request client

// Create client
const client = new GraphQLClient(
    // Zora Aurora subgraph
    'https://api.thegraph.com/subgraphs/name/curaos/zora-v1-subgraph'
)

// Export client
export default client
