import { gql } from "graphql-tag";

export const GetAllProducts = gql`
  #graphql

  query getAllProducts {
    getAllProducts {
      id
      name
      seller
      price
    }
  }
`;
