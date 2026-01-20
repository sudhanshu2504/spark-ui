import axios from "axios";
import constants from "@/utils/constants";
import _ from "lodash";

export async function getComponents(
  queryFields: string = "name,slug,isActive, isNewComponent"
) {
  try {
    let response = await axios.post(
      `${constants.CMS.BASE_URL}/api/graphql`,
      {
        query: `
          {
            Components(where: { isActive: { equals: true } }) {
              docs {
                ${queryFields}
              }
            }
          }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );
    let components = _.get(response.data, "data.Components.docs", []);
    components = _.sortBy(components, (c) => c.name.toLowerCase());

    return components;
  } catch (error) {
    console.error("Error fetching components from CMS:", error);
    return [];
  }
}

export async function getComponentsBySlug(
  slug: string
) {
  try {
    let response = await axios.post(
      `${constants.CMS.BASE_URL}/api/graphql`,
      {
        query: `
          { Components(where: { slug: { equals: \"${slug}\" } }) { docs { createdAt updatedAt isActive isNewComponent slug name description features { point id } installationProcess { heading code id } path codeblockCSS codeVariants { language code demo_code } thumbnailURL id } } }
        `,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );
    let components = _.get(response.data, "data.Components.docs", []);
    return components[0];
  } catch (error) {
    console.error("Error fetching components from CMS:", error);
    return [];
  }
}