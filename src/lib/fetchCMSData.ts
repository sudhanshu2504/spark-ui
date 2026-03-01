import { cache } from "react";
import constants from "@/utils/constants";
import _ from "lodash";

/**
 * Fetch components with Next.js caching and ISR
 * - Uses Next.js fetch API for automatic caching
 * - Revalidates every 3600 seconds (1 hour)
 * - Request memoization via React cache()
 */
export const getComponents = cache(async (
  queryFields: string = "name,slug,isActive, isNewComponent"
) => {
  try {
    const response = await fetch(
      `${constants.CMS.BASE_URL}/api/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            {
              Components(where: { isActive: { equals: true } }) {
                docs {
                  ${queryFields}
                }
              }
            }
          `,
        }),
        // Next.js caching strategy
        next: {
          revalidate: 3600, // Revalidate every 1 hour (ISR)
          tags: ["components"], // Tag for on-demand revalidation
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    let components = _.get(data, "data.Components.docs", []);
    components = _.sortBy(components, (c) => c?.name?.toLowerCase());

    return components;
  } catch (error) {
    console.error("Error fetching components from CMS:", error);
    return [];
  }
});

/**
 * Fetch component by slug with Next.js caching and ISR
 * - Uses Next.js fetch API for automatic caching
 * - Revalidates every 3600 seconds (1 hour)
 * - Request memoization via React cache()
 */
export const getComponentsBySlug = cache(async (
  slug: string
) => {
  try {
    const response = await fetch(
      `${constants.CMS.BASE_URL}/api/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            { Components(where: { slug: { equals: \"${slug}\" } }) { docs { createdAt updatedAt isActive isNewComponent slug name description features { point id } installationProcess { heading code id } path codeblockCSS codeVariants { language code demo_code } thumbnailURL id } } }
          `,
        }),
        // Next.js caching strategy
        next: {
          revalidate: 3600, // Revalidate every 1 hour (ISR)
          tags: [`component-${slug}`], // Tag for on-demand revalidation
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    let components = _.get(data, "data.Components.docs", []);
    return components[0];
  } catch (error) {
    console.error("Error fetching components from CMS:", error);
    return [];
  }
});