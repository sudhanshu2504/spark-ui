import React from "react";
import { getComponentsBySlug } from "@/lib/fetchCMSData";
import DisplayPage from "./index";
import { redirect } from "next/navigation";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data = await getComponentsBySlug(slug);
  
  if (!data?.slug) {
    redirect('/not-found');
  }
  return <DisplayPage data={data} />;
}
