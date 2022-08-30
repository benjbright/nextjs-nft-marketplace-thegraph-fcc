# nextjs-nft-marketplace-thegraph-fcc
 FreeCodeCamp blockchain course - Lesson 15 NextJS The Graph

## Timestamps and notes
- Instead of reading the events from Moralis, we will
    1. Index them with TheGraph
    2. Read from the graph

1:04:03 What is The Graph?
- https://thegraph.com/en/

1:04:07 Building a subgraph
- Create a subgraph
- https://thegraph.com/docs/en/
- Need to set up a new directory for the subgraph
- ```yarn add @graphprotocol/graph-cli```
- ```yarn graph init --studio nft-marketplace```
- Next steps:

  1. Run `graph auth` to authenticate with your deploy key.

  2. Type `cd nft-marketplace` to enter the subgraph.

  3. Run `yarn deploy` to deploy the subgraph.

- Note the ```nft-marketplace``` folder was in the ```Users/benjb``` folder
- ```mv nft-marketplace/* ./``` to copy into the graph folder

1:04:12 Further installation notes
- Note the ABI is automatically generated as the contract is verified in Etherscan
- If not can add the json file manually 

1:04:18 
- Complete ```schema.graphql``` 
- Run ```yarn graph codegen``` to update the TypeScript files
- This must be run whenever you update the ```schema.graphql``` file

1:04:34 
- Note - add a ```startBlock``` to the ```subgraph.yaml``` file 
- This is the block number to start listening for events from 
- Get the block number from the tx details on Etherscan (minus one)

1:04:35 Deploying our Subgraph
- Use the Auth & Deploy code from TheGraph 
- Follow the instructions in the Docs
- Then run ```mint-and-list.js``` in the Hardhat folder
- GraphQL queries https://www.tutorialspoint.com/graphql/graphql_query.htm

1:04:39 Reading from The Graph
- Install Apollo client https://www.npmjs.com/package/@apollo/client
- ```yarn add @apollo/client``` and ```yarn add graphql```

1:04:51 Hosting our DAPP






