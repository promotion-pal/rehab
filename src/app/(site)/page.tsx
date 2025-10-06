import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Divider } from "@heroui/divider";
import { CommonWrapper } from "@/shared/wrapper";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";

export default function HomePage() {
  return (
    <>
      <CommonWrapper>
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Возвращение к жизни — это путь, и мы пройдем его{" "}
                <span className="text-primary dark:text-primary-400">
                  вместе
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                <strong className="text-foreground">
                  Центр "Новое Начало"
                </strong>{" "}
                — это место, где профессиональная помощь, поддержка и
                человеческое тепло помогают преодолеть зависимость и обрести
                внутреннюю гармонию.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="bg-primary text-white px-8 py-6 text-lg font-semibold"
                  startContent={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  }
                >
                  Бесплатная консультация
                </Button>
                <Button
                  variant="bordered"
                  className="border-primary text-primary dark:border-primary-400 dark:text-primary-400 px-8 py-6 text-lg font-semibold"
                >
                  Узнать о программах
                </Button>
              </div>
            </div>

            {/* Placeholder для изображения */}
            <div className="w-full h-96 bg-default-100 dark:bg-default-200 rounded-xl flex items-center justify-center">
              <span className="text-default-500 text-lg">
                Изображение центра
              </span>
            </div>
          </div>
        </div>
      </CommonWrapper>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Центр "Новое Начало" — больше, чем просто реабилитация
            </h2>
            <p className="text-lg text-default-600 leading-relaxed">
              Наша миссия — создать безопасное и поддерживающее пространство для
              комплексного восстановления личности. Мы не просто лечим симптомы,
              мы помогаем найти корень проблемы, восстановить душевное
              равновесие и построить прочный фундамент для счастливой и трезвой
              жизни.
            </p>
          </div>
        </div>
      </section>

      <CommonWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
              title: "Анонимность и конфиденциальность",
              description:
                "Мы гарантируем полную анонимность на всех этапах лечения.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
              title: "Комплексный подход",
              description:
                "Работа команды специалистов: психотерапевты, наркологи, аддиктологи.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              ),
              title: "Индивидуальные программы",
              description:
                "Для каждого резидента мы разрабатываем персональный план лечения.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              ),
              title: "Поддержка для родных",
              description:
                "Группы поддержки для семей, потому что выздоровление — это общий процесс.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-all duration-300 border-none bg-background"
            >
              <CardBody className="p-6">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 w-fit rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-default-600">{item.description}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </CommonWrapper>

      <CommonWrapper styleWrapper="mt-10">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            Наши программы реабилитации
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Реабилитация при алкогольной зависимости",
                description:
                  "Курс, направленный на физическое восстановление и преодоление психологической тяги.",
              },
              {
                title: "Реабилитация при наркотической зависимости",
                description:
                  "Комплексная программа, включающая детоксикацию, психотерапию и ресоциализацию.",
              },
              {
                title: "Созависимость",
                description:
                  "Помощь родственникам и близким, которые оказались втянуты в болезненную динамику отношений.",
              },
              {
                title: "Амбулаторные программы",
                description:
                  "Поддержка для тех, кто завершил стационарный курс или чье состояние не требует круглосуточного наблюдения.",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-content1"
              >
                <CardBody className="p-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {program.title}
                    </h3>
                    <p className="text-default-600">{program.description}</p>
                    <Button
                      variant="light"
                      className="text-primary font-semibold p-0"
                    >
                      Подробнее →
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CommonWrapper>

      <CommonWrapper styleWrapper="mt-10">
        <div className="space-y-12 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
            Истории выздоровления
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Алексей",
                years: "2 года трезвости",
                text: "Я пришел в центр сломленным и не верящим в себя. Благодаря поддержке терапевтов и атмосфере принятия, я не только бросил пить, но и заново научился радоваться жизни.",
              },
              {
                name: "Семья Ивановых",
                years: "родители",
                text: 'Мы уже потеряли надежду помочь нашему сыну. Центр "Новое Начало" стал для нас спасательным кругом. Теперь мы видим его здоровым и счастливым.',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-lg bg-background">
                <CardBody className="p-6">
                  <div className="space-y-4">
                    <p className="text-default-600 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <Divider />
                    <div className="flex items-center gap-3">
                      <Avatar className="bg-primary text-white" />
                      <div>
                        <p className="font-bold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-default-500">
                          {testimonial.years}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CommonWrapper>

      <CommonWrapper styleWrapper="mt-10 bg-blue-400">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Сделайте первый шаг к свободе
          </h2>
          <p className="text-lg opacity-90">
            Не откладывайте изменение жизни на потом. Позвоните нам сегодня,
            чтобы анонимно проконсультироваться со специалистом.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              as={Link}
              href={`tel:${siteConfig.company.phone}`}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              startContent={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
            >
              Позвонить: {siteConfig.company.phone}
            </Button>

            <Button
              as={Link}
              href={`https://wa.me/${siteConfig.company.phone}`}
              variant="bordered"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              startContent={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              }
            >
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </CommonWrapper>
    </>
  );
}
