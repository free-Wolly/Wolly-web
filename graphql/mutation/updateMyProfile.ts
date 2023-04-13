import { gql } from "graphql-request";

const updateMyProfileMutation = gql`
  mutation UpdateMyProfile($data: UpdateProfileInput!) {
    updateMyProfile(data: $data) {
      user {
        firstName
        lastName
      }
      token
    }
  }
`;

export default updateMyProfileMutation;
