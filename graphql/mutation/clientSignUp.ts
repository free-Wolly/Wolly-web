import { gql } from "graphql-request";

const clientSignUpMutation = gql`
  mutation ClientSignUp($data: ClientSignupInput!, $language: Language!) {
    clientSignUp(data: $data, language: $language) {
      user {
        verificationCode
      }
      token
    }
  }
`;

export default clientSignUpMutation;
