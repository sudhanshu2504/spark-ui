const constants = {
    CMS: {
        BASE_URL: process.env.NEXT_PUBLIC_CMS_URL,
        // Canonical query field set for components.
        // Using the same fields everywhere makes calls dedupe via React cache().
        COMPONENTS_FIELDS: "name,slug,thumbnailURL,description,isActive,isNewComponent",
    },
};

export default constants;