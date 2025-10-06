// import { title } from "@/components/primitives";
// import { prisma } from "@/config/prisma";

// export const dynamic = "force-dynamic";

// export default async function ArticlePage() {
//   const articles = await prisma.article.findMany();

//   return (
//     <div>
//       <h1 className={title()}>Docs</h1>

//       {articles.map((item) => (
//         <p>{item.caption}</p>
//       ))}
//     </div>
//   );
// }

// app/articles/page.tsx
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { CommonWrapper } from "@/shared/wrapper";
import { Link } from "@heroui/link";
import { prisma } from "@/config/prisma";
import { Calendar, User, ArrowRight, BookOpen, Tag } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <>
      {/* Hero Section */}
      <CommonWrapper>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Полезные{" "}
                <span className="text-primary dark:text-primary-400">
                  статьи
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                <strong className="text-foreground">
                  Экспертные материалы
                </strong>{" "}
                о лечении зависимостей, психическом здоровье и пути к
                выздоровлению. Советы от наших специалистов.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  as={Link}
                  href="/programs"
                  className="bg-primary text-white px-8 py-6 text-lg font-semibold"
                  startContent={<BookOpen className="w-5 h-5" />}
                >
                  Наши программы
                </Button>
                <Button
                  as={Link}
                  href="/contacts"
                  variant="bordered"
                  className="border-primary text-primary dark:border-primary-400 dark:text-primary-400 px-8 py-6 text-lg font-semibold"
                >
                  Задать вопрос
                </Button>
              </div>
            </div>

            <div className="w-full h-96 bg-default-100 dark:bg-default-200 rounded-xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <BookOpen className="w-16 h-16 text-primary mx-auto" />
                <p className="text-default-500 text-lg">
                  База знаний о зависимостях
                </p>
              </div>
            </div>
          </div>
        </div>
      </CommonWrapper>

      {/* Список статей */}
      <CommonWrapper styleWrapper="mt-10">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Все статьи
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Актуальные материалы о лечении зависимостей, психологической
              помощи и восстановлении качества жизни.
            </p>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                >
                  <CardBody className="p-6">
                    <div className="space-y-4">
                      {/* Заголовок */}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Краткое описание */}
                      <p className="text-default-600 line-clamp-3 leading-relaxed">
                        {article.caption}
                      </p>

                      {/* Мета-информация */}
                      <div className="flex flex-wrap gap-4 text-sm text-default-500">
                        {article.author && (
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(article.createdAt)}</span>
                        </div>
                      </div>

                      {/* Теги */}
                      {article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                          {article.tags.length > 3 && (
                            <span className="text-default-400 text-xs">
                              +{article.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Кнопка читать */}
                      <Button
                        as={Link}
                        href={`/articles/${article.slug}`}
                        variant="light"
                        className="text-primary font-semibold self-start group-hover:translate-x-1 transition-transform"
                        endContent={<ArrowRight className="w-4 h-4" />}
                      >
                        Читать статью
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-default-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Статьи скоро появятся
              </h3>
              <p className="text-default-600 max-w-md mx-auto">
                Наши специалисты готовят полезные материалы о лечении
                зависимостей и психическом здоровье. Возвращайтесь позже!
              </p>
            </div>
          )}
        </div>
      </CommonWrapper>

      {/* CTA Section */}
      <CommonWrapper styleWrapper="mt-10 bg-primary">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Нужна консультация специалиста?
          </h2>
          <p className="text-lg opacity-90">
            Наши врачи и психологи готовы ответить на ваши вопросы и помочь
            подобрать программу лечения.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              as={Link}
              href="/contacts"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Получить консультацию
            </Button>

            <Button
              as={Link}
              href="/programs"
              variant="bordered"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              Смотреть программы
            </Button>
          </div>
        </div>
      </CommonWrapper>
    </>
  );
}
