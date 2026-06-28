import React from "react";
import { getComponentsBySlug, getComponents } from "@/lib/fetchCMSData";
import DisplayPage from "./index";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

// Generate static params for all components at build time
export async function generateStaticParams() {
  const components = await getComponents("slug");

  return components.map((component: any) => ({
    slug: component.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getComponentsBySlug(slug);

  if (!data?.slug) {
    return {
      title: "Component Not Found",
    };
  }

  return {
    title: `${data.name} - Spark UI`,
    description: data.description || `${data.name} component for Spark UI library`,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getComponentsBySlug(slug);

  if (!data?.slug) {
    redirect('/not-found');
  }
  return <DisplayPage data={data} />;
}

