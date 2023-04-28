import { gql } from "graphql-request";

const getAllAdressesQuery = gql`
  query GetAllAddresses {
    getAllAddresses {
      id
      street
    }
  }
`;

export default getAllAdressesQuery;
