import { client, gql } from "./client";

export const getOrganizationByName = async (username) => {
  const { data } = await client.query({
    query: gql`
      query {
        organization(username: "${username}") {
          username
          password
          creationDate
          updateDate
        }
      }
    `,
  });
  return data;
};
