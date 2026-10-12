import { notFound } from "next/navigation";
import { DetailPage } from "@/components/directory-page";
import { widgets } from "@/lib/catalog";
export default async function WidgetDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = widgets.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} kind="Widget" />;
}
