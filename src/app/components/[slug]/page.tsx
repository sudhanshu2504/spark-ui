import React from "react";
import { getComponentsBySlug } from "@/lib/fetchCMSData";
import DisplayPage from "./index";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = await getComponentsBySlug(slug);

  return (
    <DisplayPage data={data} />
  );
}
