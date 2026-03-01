import { revalidateTag, revalidatePath } from "next/cache";

/**
 * Revalidate all components cache
 * Call this when components are updated in the CMS
 */
export function revalidateComponents() {
  revalidateTag("components");
  revalidatePath("/components");
}

/**
 * Revalidate a specific component by slug
 * Call this when a specific component is updated in the CMS
 */
export function revalidateComponent(slug: string) {
  revalidateTag(`component-${slug}`);
  revalidatePath(`/components/${slug}`);
}

/**
 * Revalidate all cache
 * Use sparingly - only when major CMS updates occur
 */
export function revalidateAll() {
  revalidateTag("components");
  revalidatePath("/components", "layout");
}
