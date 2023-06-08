import { gql } from "graphql-request";

const createAddressMutation = gql`
  mutation CreateAddress($data: CreateAddressInput!) {
    createAddress(data: $data) {
      id
    }
  }
`;

export default createAddressMutation;
