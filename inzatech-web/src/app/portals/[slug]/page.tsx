import { notFound } from "next/navigation";
import { DetailPage } from "@/components/directory-page";
import { portals } from "@/lib/catalog";
export default async function PortalDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portals.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <DetailPage item={item} kind="Portal" />;
}
