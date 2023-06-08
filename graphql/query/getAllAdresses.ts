import { gql } from "graphql-request";

const getAllAdressesQuery = gql`
  query GetAllAddresses {
    getAllAddresses {
      id
    }
  }
`;

export default getAllAdressesQuery;
