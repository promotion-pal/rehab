// app/articles/[slug]/page.tsx
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { CommonWrapper } from "@/shared/wrapper";
import { Link } from "@heroui/link";
import { prisma } from "@/config/prisma";
import { Calendar, User, ArrowLeft, Tag, Share2, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await prisma.article.findUnique({
    where: {
      slug: params.slug,
      published: true,
    },
  });

  if (!article) {
    notFound();
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const relatedArticles = await prisma.article.findMany({
    where: {
      published: true,
      slug: {
        not: params.slug,
      },
      tags: {
        hasSome: article.tags,
      },
    },
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      {/* Hero Section */}
      <CommonWrapper>
        <div className="relative z-10">
          <Button
            as={Link}
            href="/articles"
            variant="light"
            className="mb-6"
            startContent={<ArrowLeft className="w-4 h-4" />}
          >
            Назад к статьям
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* Заголовок */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {article.title}
              </h1>

              {/* Мета-информация */}
              <div className="flex flex-wrap gap-6 text-default-600">
                {article.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{article.author}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(article.createdAt)}</span>
                </div>
              </div>

              {/* Теги */}
              {article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </CommonWrapper>

      {/* Содержание статьи */}
      <CommonWrapper styleWrapper="mt-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Основной контент */}
            <div className="lg:col-span-3">
              <Card className="bg-background border-none">
                <CardBody className="p-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {/* Краткое описание */}
                    <p className="text-xl text-default-600 leading-relaxed mb-8 font-medium">
                      {article.caption}
                    </p>

                    {/* Основной контент */}
                    {article.content ? (
                      <div
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                      />
                    ) : (
                      <div className="text-center py-12">
                        <BookOpen className="w-16 h-16 text-default-300 mx-auto mb-4" />
                        <p className="text-default-600">
                          Содержание статьи скоро будет доступно
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Кнопки под статьей */}
                  <div className="flex flex-wrap gap-4 pt-8 mt-8 border-t border-default-200">
                    <Button
                      as={Link}
                      href="/articles"
                      variant="light"
                      startContent={<ArrowLeft className="w-4 h-4" />}
                    >
                      Все статьи
                    </Button>
                    <Button
                      variant="bordered"
                      startContent={<Share2 className="w-4 h-4" />}
                    >
                      Поделиться
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Боковая панель */}
            <div className="space-y-6">
              {/* Похожие статьи */}
              {relatedArticles.length > 0 && (
                <Card className="bg-background border-none">
                  <CardBody className="p-6">
                    <h3 className="font-bold text-foreground mb-4">
                      Похожие статьи
                    </h3>
                    <div className="space-y-4">
                      {relatedArticles.map((relatedArticle) => (
                        <Link
                          key={relatedArticle.id}
                          href={`/articles/${relatedArticle.slug}`}
                          className="block p-3 rounded-lg hover:bg-default-100 transition-colors group"
                        >
                          <h4 className="font-semibold text-foreground group-hover:text-primary line-clamp-2">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-default-600 text-sm line-clamp-2 mt-1">
                            {relatedArticle.caption}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              )}

              {/* CTA боковая панель */}
              <Card className="bg-primary border-none">
                <CardBody className="p-6 text-center text-white">
                  <h3 className="font-bold mb-3">Нужна помощь?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Профессиональная консультация специалиста
                  </p>
                  <Button
                    as={Link}
                    href="/contacts"
                    className="bg-white text-primary w-full"
                    size="sm"
                  >
                    Получить консультацию
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </CommonWrapper>

      {/* CTA Section */}
      <CommonWrapper styleWrapper="mt-10 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Остались вопросы?</h2>
          <p className="text-lg opacity-90">
            Наши специалисты готовы ответить на все ваши вопросы о лечении
            зависимостей и реабилитации.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              as={Link}
              href="/contacts"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Связаться с нами
            </Button>

            <Button
              as={Link}
              href="/programs"
              variant="bordered"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              Наши программы
            </Button>
          </div>
        </div>
      </CommonWrapper>
    </>
  );
}
