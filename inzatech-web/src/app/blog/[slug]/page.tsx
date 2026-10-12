import { notFound } from "next/navigation";
import { DetailPage } from "@/components/directory-page";
import { articles } from "@/lib/catalog";
export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = articles.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} kind="Blog Media · Local editorial preview" />;
}
