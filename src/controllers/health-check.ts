import * as apolloQuery from "../utils/apollo-client/query";

const getCheck = async (req, res, next) => {
  return res.send("<b>Our server is healthy!!</b>");
};

const getOrganization = async (req, res, next) => {
  const { organization } = await apolloQuery.getOrganizationByName(
    "johndoe123"
  );
  return res.send(
    "Organization: " + "<br>" + "<br>" + JSON.stringify(organization, null, 2)
  );
};

export default { getCheck, getOrganization };
