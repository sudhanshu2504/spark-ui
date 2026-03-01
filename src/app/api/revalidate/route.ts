import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

/**
 * API Route for on-demand revalidation
 * 
 * Usage:
 * POST /api/revalidate
 * Body: { secret: "your-secret-token", tag?: "components" | "component-{slug}", path?: "/components" }
 * 
 * You can call this from your CMS webhook when content is updated
 * to immediately refresh the cache without waiting for ISR timer
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, tag, path, slug } = body;

    // Verify secret token (set this in your environment variables)
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        { message: "Invalid secret" },
        { status: 401 }
      );
    }

    // Revalidate by tag
    if (tag) {
      revalidateTag(tag);
      console.log(`Revalidated tag: ${tag}`);
    }

    // Revalidate specific component by slug
    if (slug) {
      revalidateTag(`component-${slug}`);
      revalidatePath(`/components/${slug}`);
      console.log(`Revalidated component: ${slug}`);
    }

    // Revalidate by path
    if (path) {
      revalidatePath(path);
      console.log(`Revalidated path: ${path}`);
    }

    // If no specific revalidation, revalidate all components
    if (!tag && !path && !slug) {
      revalidateTag("components");
      revalidatePath("/components");
      console.log("Revalidated all components");
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      tag,
      path,
      slug,
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating", error: String(error) },
      { status: 500 }
    );
  }
}
