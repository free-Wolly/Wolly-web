import { gql } from "graphql-request";

const signinMutation = gql`
  mutation Signin($data: SignInInput!, $language: Language!) {
    signin(data: $data, language: $language) {
      user {
        lastName
        firstName
      }
      token
    }
  }
`;

export default signinMutation;
