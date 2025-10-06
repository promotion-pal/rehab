// app/programs/page.tsx
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { CommonWrapper } from "@/shared/wrapper";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import {
  Shield,
  Syringe,
  Users,
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Реабилитация при алкогольной зависимости",
      description:
        "Комплексная программа, направленная на физическое восстановление и преодоление психологической тяги к алкоголю.",
      duration: "3-6 месяцев",
      features: [
        "Медикаментозная детоксикация",
        "Индивидуальная психотерапия",
        "Групповая терапия",
        "Семейные консультации",
        "Постреабилитационная поддержка",
      ],
      icon: <Shield className="w-12 h-12 text-primary" />,
      color: "blue",
    },
    {
      title: "Реабилитация при наркотической зависимости",
      description:
        "Интенсивная программа, включающая все этапы восстановления от детоксикации до социальной адаптации.",
      duration: "6-12 месяцев",
      features: [
        "Круглосуточное медицинское наблюдение",
        "Индивидуальный план лечения",
        "Терапия созависимости",
        "Трудотерапия и арт-терапия",
        "Пожизненная поддержка выпускников",
      ],
      icon: <Syringe className="w-12 h-12 text-primary" />,
      color: "green",
    },
    {
      title: "Программа для созависимых",
      description:
        "Специализированная помощь родственникам и близким людей, страдающих зависимостью.",
      duration: "1-3 месяца",
      features: [
        "Психологическая диагностика",
        "Индивидуальные консультации",
        "Группы поддержки для родных",
        "Обучение здоровому общению",
        "Восстановление личных границ",
      ],
      icon: <Users className="w-12 h-12 text-primary" />,
      color: "purple",
    },
    {
      title: "Амбулаторные программы",
      description:
        "Гибкие программы для тех, кто завершил стационарное лечение или нуждается в поддерживающей терапии.",
      duration: "Индивидуально",
      features: [
        "Регулярные консультации психолога",
        "Группы взаимопомощи",
        "Мониторинг состояния",
        "Поддержка в социальной адаптации",
        "Онлайн-консультации",
      ],
      icon: <Calendar className="w-12 h-12 text-primary" />,
      color: "orange",
    },
    {
      title: "Экстренная помощь и интервенция",
      description:
        "Срочная помощь в кризисных ситуациях, включая мотивационные беседы и организацию лечения.",
      duration: "24/7",
      features: [
        "Круглосуточная горячая линия",
        "Экстренный выезд специалиста",
        "Мотивационная интервенция",
        "Организация госпитализации",
        "Кризисное консультирование",
      ],
      icon: <Clock className="w-12 h-12 text-primary" />,
      color: "red",
    },
    {
      title: "Постреабилитационное сопровождение",
      description:
        "Долгосрочная поддержка после завершения основной программы для закрепления результатов.",
      duration: "Пожизненно",
      features: [
        "Регулярные встречи выпускников",
        "Индивидуальные консультации",
        "Трудоустройство и социальная адаптация",
        "Семейная поддержка",
        "Профилактика срывов",
      ],
      icon: <CheckCircle2 className="w-12 h-12 text-primary" />,
      color: "teal",
    },
  ];

  const programStats = [
    { number: "95%", label: "успешных случаев" },
    { number: "10+", label: "лет опыта" },
    { number: "2000+", label: "помощь оказана" },
    { number: "24/7", label: "поддержка" },
  ];

  return (
    <>
      {/* Hero Section */}
      <CommonWrapper>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Наши программы{" "}
                <span className="text-primary dark:text-primary-400">
                  реабилитации
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                <strong className="text-foreground">
                  Индивидуальный подход
                </strong>{" "}
                к каждому случаю. Мы разрабатываем персонализированные
                программы, учитывающие особенности состояния, личность и историю
                каждого пациента.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  as={Link}
                  href="/consultation"
                  className="bg-primary text-white px-8 py-6 text-lg font-semibold"
                  startContent={<Phone className="w-5 h-5" />}
                >
                  Получить консультацию
                </Button>
                <Button
                  as={Link}
                  href="/about"
                  variant="bordered"
                  className="border-primary text-primary dark:border-primary-400 dark:text-primary-400 px-8 py-6 text-lg font-semibold"
                >
                  О нашем центре
                </Button>
              </div>
            </div>

            <div className="w-full h-96 bg-default-100 dark:bg-default-200 rounded-xl flex items-center justify-center">
              <span className="text-default-500 text-lg">
                Изображение программ
              </span>
            </div>
          </div>
        </div>
      </CommonWrapper>

      {/* Статистика */}
      <section className="py-16 bg-default-50 dark:bg-default-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {programStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-default-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Основные программы */}
      <CommonWrapper styleWrapper="mt-10">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Все программы реабилитации
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Мы предлагаем комплексные решения для различных видов зависимостей
              и ситуаций, обеспечивая профессиональную поддержку на каждом этапе
              восстановления.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-all duration-300 border-none bg-background group hover:scale-105"
              >
                <CardBody className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg">
                        {program.icon}
                      </div>
                      <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {program.duration}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>

                    <p className="text-default-600 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">
                        Что включает программа:
                      </h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-default-600 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        as={Link}
                        href={`/programs/${program.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="bg-primary text-white flex-1"
                      >
                        Подробнее
                      </Button>
                      <Button
                        as={Link}
                        href="/consultation"
                        variant="bordered"
                        className="border-primary text-primary"
                      >
                        Консультация
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CommonWrapper>

      {/* Процесс реабилитации */}
      <CommonWrapper styleWrapper="mt-10">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Этапы реабилитации
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Мы сопровождаем пациента на каждом этапе пути к выздоровлению,
              обеспечивая комплексный и последовательный подход.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Диагностика",
                description: "Комплексное обследование и оценка состояния",
                icon: <Shield className="w-8 h-8" />,
              },
              {
                step: "02",
                title: "Детоксикация",
                description: "Медикаментозное очищение организма",
                icon: <Syringe className="w-8 h-8" />,
              },
              {
                step: "03",
                title: "Терапия",
                description: "Индивидуальная и групповая психотерапия",
                icon: <Users className="w-8 h-8" />,
              },
              {
                step: "04",
                title: "Адаптация",
                description: "Возвращение к нормальной жизни",
                icon: <CheckCircle2 className="w-8 h-8" />,
              },
            ].map((stage, index) => (
              <Card
                key={index}
                className="bg-background border-none text-center"
              >
                <CardBody className="p-6">
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-primary">
                      {stage.step}
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                      {stage.icon}
                    </div>
                    <h3 className="font-bold text-foreground">{stage.title}</h3>
                    <p className="text-default-600 text-sm">
                      {stage.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CommonWrapper>
    </>
  );
}

// // import { title } from "@/components/primitives";

// // export default function BlogPage() {
// //   return (
// //     <div>
// //       <h1 className={title()}>Blog</h1>
// //     </div>
// //   );
// // }

// // app/programs/[slug]/page.tsx
// import { Button } from "@heroui/button";
// import { Card, CardBody } from "@heroui/card";
// import { CommonWrapper } from "@/shared/wrapper";
// import { siteConfig } from "@/config/site";
// import { Link } from "@heroui/link";
// import {
//   Shield,
//   Syringe,
//   Users,
//   Calendar,
//   Clock,
//   CheckCircle2,
//   Phone,
//   MessageCircle,
//   ArrowLeft,
//   Star,
// } from "lucide-react";

// export default function ProgramDetailPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const program = {
//     title: "Реабилитация при алкогольной зависимости",
//     description:
//       "Комплексная программа, направленная на физическое восстановление и преодоление психологической тяги к алкоголю.",
//     fullDescription:
//       "Наша программа реабилитации при алкогольной зависимости представляет собой многоэтапный процесс, который начинается с детоксикации и заканчивается полной социальной адаптацией. Мы используем проверенные методики и индивидуальный подход к каждому пациенту.",
//     duration: "3-6 месяцев",
//     icon: <Shield className="w-16 h-16 text-primary" />,
//     features: [
//       "Медикаментозная детоксикация под наблюдением врача",
//       "Индивидуальная психотерапия с сертифицированными специалистами",
//       "Групповая терапия для обмена опытом и поддержки",
//       "Семейные консультации и работа с созависимостью",
//       "Постреабилитационная поддержка и сопровождение",
//     ],
//     results: [
//       "Полное физическое восстановление",
//       "Устранение психологической зависимости",
//       "Восстановление семейных отношений",
//       "Возвращение к трудовой деятельности",
//       "Навыки профилактики срывов",
//     ],
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <CommonWrapper>
//         <div className="relative z-10">
//           <Button
//             as={Link}
//             href="/programs"
//             variant="light"
//             className="mb-6"
//             startContent={<ArrowLeft className="w-4 h-4" />}
//           >
//             Назад к программам
//           </Button>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <div className="p-4 bg-primary/10 rounded-xl">
//                   {program.icon}
//                 </div>
//                 <div>
//                   <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
//                     {program.duration}
//                   </div>
//                 </div>
//               </div>

//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
//                 {program.title}
//               </h1>

//               <p className="text-xl text-gray-600 dark:text-gray-300">
//                 {program.description}
//               </p>

//               <p className="text-lg text-default-600 leading-relaxed">
//                 {program.fullDescription}
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Button
//                   as={Link}
//                   href="/consultation"
//                   className="bg-primary text-white px-8 py-6 text-lg font-semibold"
//                   startContent={<Phone className="w-5 h-5" />}
//                 >
//                   Записаться на консультацию
//                 </Button>
//                 <Button
//                   as={Link}
//                   href={`tel:${siteConfig.company.phone}`}
//                   variant="bordered"
//                   className="border-primary text-primary px-8 py-6 text-lg font-semibold"
//                 >
//                   Срочный звонок
//                 </Button>
//               </div>
//             </div>

//             <div className="w-full h-96 bg-default-100 dark:bg-default-200 rounded-xl flex items-center justify-center">
//               <span className="text-default-500 text-lg">Детали программы</span>
//             </div>
//           </div>
//         </div>
//       </CommonWrapper>

//       {/* Особенности программы */}
//       <CommonWrapper styleWrapper="mt-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <Card className="bg-background border-none">
//             <CardBody className="p-6">
//               <h2 className="text-2xl font-bold text-foreground mb-6">
//                 Что включает программа
//               </h2>
//               <div className="space-y-4">
//                 {program.features.map((feature, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
//                     <span className="text-default-600">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </CardBody>
//           </Card>

//           <Card className="bg-background border-none">
//             <CardBody className="p-6">
//               <h2 className="text-2xl font-bold text-foreground mb-6">
//                 Ожидаемые результаты
//               </h2>
//               <div className="space-y-4">
//                 {program.results.map((result, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
//                     <span className="text-default-600">{result}</span>
//                   </div>
//                 ))}
//               </div>
//             </CardBody>
//           </Card>
//         </div>
//       </CommonWrapper>

//       {/* CTA Section */}
//       <CommonWrapper styleWrapper="mt-10 bg-primary">
//         <div className="max-w-4xl mx-auto text-center text-white space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Готовы начать лечение?
//           </h2>
//           <p className="text-lg opacity-90">
//             Свяжитесь с нами для бесплатной консультации и подбора
//             индивидуальной программы
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//             <Button
//               as={Link}
//               href={`tel:${siteConfig.company.phone}`}
//               className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
//               startContent={<Phone className="w-5 h-5" />}
//             >
//               {siteConfig.company.phone}
//             </Button>

//             <Button
//               as={Link}
//               href={`https://wa.me/${siteConfig.company.phone}`}
//               variant="bordered"
//               className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
//               startContent={<MessageCircle className="w-5 h-5" />}
//             >
//               WhatsApp
//             </Button>
//           </div>
//         </div>
//       </CommonWrapper>
//     </>
//   );
// }
