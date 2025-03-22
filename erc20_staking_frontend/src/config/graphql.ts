import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(
  import.meta.env.VITE_SUBGRAPH_URL || 'http://localhost:8000/subgraphs/name/your-subgraph'
) 