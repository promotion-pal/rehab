import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { CommonWrapper } from "@/shared/wrapper";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import {
  Heart,
  Users,
  Shield,
  Award,
  Target,
  Star,
  Calendar,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  GraduationCap,
  Stethoscope,
  Brain,
  HandHeart,
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Анна Петрова",
      position: "Главный врач-психиатр",
      experience: "15 лет",
      specialization: "Лечение алкогольной и наркотической зависимости",
      icon: <Stethoscope className="w-8 h-8" />,
    },
    {
      name: "Михаил Иванов",
      position: "Клинический психолог",
      experience: "12 лет",
      specialization: "Семейная терапия, работа с созависимостью",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      name: "Елена Сидорова",
      position: "Аддиктолог",
      experience: "10 лет",
      specialization: "Реабилитация и социальная адаптация",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      name: "Дмитрий Козлов",
      position: "Психотерапевт",
      experience: "8 лет",
      specialization: "Когнитивно-поведенческая терапия",
      icon: <HandHeart className="w-8 h-8" />,
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Забота и эмпатия",
      description: "Мы относимся к каждому пациенту с пониманием и уважением",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Конфиденциальность",
      description: "Гарантируем полную анонимность и защиту личных данных",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Результативность",
      description: "Достигаем поставленных целей в лечении и реабилитации",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Индивидуальный подход",
      description: "Разрабатываем персонализированные программы для каждого",
    },
  ];

  const achievements = [
    {
      number: "10+",
      label: "Лет успешной работы",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: "2000+",
      label: "Пациентов вернулись к нормальной жизни",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "95%",
      label: "Успешных случаев лечения",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Круглосуточная поддержка",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  const licenses = [
    {
      title: "Лицензия Минздрава",
      number: "ЛО-77-01-019832",
      description: "На осуществление медицинской деятельности",
    },
    {
      title: "Сертификат соответствия",
      number: "РОСС RU.УП66.Н01658",
      description: "Международным стандартам качества",
    },
    {
      title: "Членство в Ассоциации",
      number: "АНР-2023-0456",
      description: "Национальной ассоциации реабилитологов",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <CommonWrapper>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                О нашем{" "}
                <span className="text-primary dark:text-primary-400">
                  центре
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                <strong className="text-foreground">
                  Центр "Новое Начало"
                </strong>{" "}
                — это команда профессионалов, которая уже более 10 лет помогает
                людям вернуться к полноценной жизни без зависимостей.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  as={Link}
                  href="/programs"
                  className="bg-primary text-white px-8 py-6 text-lg font-semibold"
                  startContent={<Heart className="w-5 h-5" />}
                >
                  Наши программы
                </Button>
                <Button
                  as={Link}
                  href="/contacts"
                  variant="bordered"
                  className="border-primary text-primary dark:border-primary-400 dark:text-primary-400 px-8 py-6 text-lg font-semibold"
                  startContent={<Users className="w-5 h-5" />}
                >
                  Встретиться с нами
                </Button>
              </div>
            </div>

            <div className="w-full h-96 bg-default-100 dark:bg-default-200 rounded-xl flex items-center justify-center">
              <span className="text-default-500 text-lg">
                Фото центра или команды
              </span>
            </div>
          </div>
        </div>
      </CommonWrapper>

      {/* Наша миссия */}
      <CommonWrapper styleWrapper="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Наша миссия и философия
            </h2>
            <div className="space-y-4 text-default-600 text-lg leading-relaxed">
              <p>
                Мы верим, что каждый человек заслуживает шанс на новую жизнь —
                жизнь без зависимостей, полную радости, смысла и возможностей.
              </p>
              <p>
                Наш подход основан на трех ключевых принципах:
                <strong> профессионализм</strong>, <strong>человечность</strong>{" "}
                и <strong>индивидуальность</strong>.
              </p>
              <p>
                Мы не просто лечим симптомы — мы помогаем найти корень проблем,
                восстановить душевное равновесие и построить прочный фундамент
                для счастливого будущего.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-background border-none text-center"
              >
                <CardBody className="p-6">
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-foreground">{value.title}</h3>
                    <p className="text-default-600 text-sm">
                      {value.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CommonWrapper>

      {/* Достижения */}
      <CommonWrapper styleWrapper="mt-10 bg-default-50 dark:bg-default-100">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Наши достижения
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              За годы работы мы помогли тысячам людей обрести свободу от
              зависимостей и вернуться к полноценной жизни.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-background border-none text-center"
              >
                <CardBody className="p-6">
                  <div className="space-y-3">
                    <div className="p-2 bg-primary/10 rounded-lg w-fit mx-auto">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      {achievement.number}
                    </div>
                    <p className="text-default-600 text-sm font-medium">
                      {achievement.label}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CommonWrapper>

      {/* Наша команда */}
      <CommonWrapper styleWrapper="mt-10">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Наша команда
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Высококвалифицированные специалисты с многолетним опытом работы в
              области лечения зависимостей и психического здоровья.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-background border-none text-center hover:shadow-xl transition-all duration-300"
              >
                <CardBody className="p-6">
                  <div className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">
                      {member.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold text-sm">
                        {member.position}
                      </p>
                      <p className="text-default-500 text-xs mt-1">
                        Опыт: {member.experience}
                      </p>
                    </div>
                    <p className="text-default-600 text-sm leading-relaxed">
                      {member.specialization}
                    </p>
                    <div className="flex justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CommonWrapper>

      {/* Лицензии и сертификаты */}
      <CommonWrapper styleWrapper="mt-10">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Лицензии и сертификаты
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Мы работаем в строгом соответствии с законодательством РФ и имеем
              все необходимые документы для осуществления медицинской
              деятельности.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenses.map((license, index) => (
              <Card key={index} className="bg-background border-none">
                <CardBody className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">
                      {license.title}
                    </h3>
                    <p className="text-primary font-mono font-semibold">
                      {license.number}
                    </p>
                    <p className="text-default-600 text-sm">
                      {license.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CommonWrapper>

      {/* Наш подход к лечению */}
      <CommonWrapper styleWrapper="mt-10 bg-primary/5 dark:bg-primary/10">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Наш подход к лечению
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Комплексная методика, сочетающая современные медицинские protocols
              и проверенные психотерапевтические практики.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Диагностика и оценка",
                description:
                  "Комплексное обследование, определение степени зависимости и сопутствующих заболеваний",
                features: [
                  "Медицинский осмотр",
                  "Психологическое тестирование",
                  "Лабораторные исследования",
                ],
              },
              {
                step: "02",
                title: "Индивидуальный план",
                description:
                  "Разработка персонализированной программы лечения с учетом особенностей пациента",
                features: [
                  "Постановка целей",
                  "Выбор методик",
                  "План реабилитации",
                ],
              },
              {
                step: "03",
                title: "Комплексное лечение",
                description:
                  "Сочетание медикаментозной терапии, психотерапии и реабилитационных мероприятий",
                features: ["Детоксикация", "Психотерапия", "Групповая работа"],
              },
              {
                step: "04",
                title: "Реабилитация",
                description:
                  "Восстановление физического и психического здоровья, формирование здоровых привычек",
                features: ["Трудотерапия", "Спорт", "Творчество"],
              },
              {
                step: "05",
                title: "Социальная адаптация",
                description:
                  "Подготовка к возвращению в общество, восстановление семейных и социальных связей",
                features: ["Семейная терапия", "Профориентация", "Поддержка"],
              },
              {
                step: "06",
                title: "Постреабилитация",
                description:
                  "Долгосрочное сопровождение, профилактика срывов, поддержка выпускников",
                features: [
                  "Амбулаторное наблюдение",
                  "Группы поддержки",
                  "Консультации",
                ],
              },
            ].map((stage, index) => (
              <Card key={index} className="bg-background border-none">
                <CardBody className="p-6">
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-primary">
                      {stage.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {stage.title}
                    </h3>
                    <p className="text-default-600">{stage.description}</p>
                    <ul className="space-y-2">
                      {stage.features.map((feature, featureIndex) => (
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
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CommonWrapper>
    </>
  );
}
