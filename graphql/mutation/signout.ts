import { gql } from "graphql-request";

const signoutMutation = gql`
  mutation Signout {
    signout {
      message
    }
  }
`;

export default signoutMutation;
