import { gql } from "graphql-request";

const verifyCodeMutation = gql`
  mutation VerifyCode($data: VerifyCodeInput!, $language: Language!) {
    verifyCode(data: $data, language: $language) {
      message
      error
    }
  }
`;

export default verifyCodeMutation;
