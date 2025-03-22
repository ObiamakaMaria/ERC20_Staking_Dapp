import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api.studio.thegraph.com/query/107274/erc20_staking_contract/v0.0.2';

const client = new GraphQLClient(endpoint);

export default client;