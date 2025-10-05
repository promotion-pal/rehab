import { title } from "@/components/primitives";
import { prisma } from "@/config/prisma";

export const dynamic = "force-dynamic";

export default async function ArticlePage() {
  const articles = await prisma.article.findMany();

  return (
    <div>
      <h1 className={title()}>Docs</h1>

      {articles.map((item) => (
        <p>{item.caption}</p>
      ))}
    </div>
  );
}
