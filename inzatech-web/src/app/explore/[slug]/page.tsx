import { notFound } from "next/navigation";
import { DetailPage } from "@/components/directory-page";
import { tools } from "@/lib/catalog";
export default async function ToolDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = tools.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} kind="Tool" />;
}
