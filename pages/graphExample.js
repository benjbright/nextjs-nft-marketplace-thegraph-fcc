import { useQuery, gql } from "@apollo/client"

const GET_ACTIVE_ITEM = gql`
{

}
`

export default function GraphExample() {}

// {
//     activeItems(first: 5) {
//         id
//         seller
//         nftAddress
//         tokenId
//       }
//     itemListeds(first: 5) {
//         id
//         seller
//         nftAddress
//         tokenId
//   }
// }

// {
//     activeItems(first: 5, where:{buyer:"0x00000000"}){
//     	id
//     	buyer
//     	seller
//     	nftAddress
//     	tokenId
//     	price
//   }
// }
