// import { title } from "@/components/primitives";

// export default function PricingPage() {
//   return (
//     <div>
//       <h1 className={title()}>Pricing</h1>
//     </div>
//   );
// }

// app/contacts/page.tsx
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { CommonWrapper } from "@/shared/wrapper";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Car,
  Train,
  Bus,
  Wifi,
  Utensils,
  Heart,
  Users,
  Shield,
} from "lucide-react";
import { GoogleMap } from "@/components/site/integration";

export default function ContactsPage() {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Телефон",
      details: siteConfig.company.phone,
      description: "Круглосуточная горячая линия",
      link: `tel:${siteConfig.company.phone}`,
      color: "green",
    },
    // {
    //   icon: <MessageCircle className="w-6 h-6" />,
    //   title: "WhatsApp",
    //   details: siteConfig.company.whatsapp,
    //   description: "Быстрая онлайн-консультация",
    //   link: `https://wa.me/${siteConfig.company.whatsapp}`,
    //   color: "blue",
    // },
    // {
    //   icon: <Mail className="w-6 h-6" />,
    //   title: "Email",
    //   details: siteConfig.company.email,
    //   description: "Отправьте нам письмо",
    //   link: `mailto:${siteConfig.company.email}`,
    //   color: "red",
    // },
    // {
    //   icon: <MapPin className="w-6 h-6" />,
    //   title: "Адрес",
    //   details: siteConfig.company.address,
    //   description: "Приезжайте на консультацию",
    //   link: "#map",
    //   color: "purple",
    // },
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", hours: "08:00 - 22:00" },
    { day: "Суббота", hours: "09:00 - 20:00" },
    { day: "Воскресенье", hours: "09:00 - 18:00" },
    { day: "Горячая линия", hours: "24/7", emergency: true },
  ];

  const transportation = [
    {
      icon: <Car className="w-6 h-6" />,
      type: "На автомобиле",
      description: "Бесплатная парковка на территории",
    },
    {
      icon: <Train className="w-6 h-6" />,
      type: "Метро",
      description: "Станция 'Центральная', 5 минут пешком",
    },
    {
      icon: <Bus className="w-6 h-6" />,
      type: "Автобус",
      description: "Остановка 'Реабилитационный центр'",
    },
  ];

  const facilities = [
    {
      icon: <Wifi className="w-6 h-6" />,
      name: "Wi-Fi",
      description: "Беспроводной интернет",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      name: "Питание",
      description: "Сбалансированное 5-разовое питание",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      name: "Медицинский уход",
      description: "Круглосуточное наблюдение",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Комнаты для родных",
      description: "Гостиничные номера для посещений",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      name: "Безопасность",
      description: "Охраняемая территория",
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
                Наши{" "}
                <span className="text-primary dark:text-primary-400">
                  контакты
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                <strong className="text-foreground">Всегда на связи</strong> —
                мы готовы помочь вам 24/7. Обращайтесь любым удобным способом, и
                наши специалисты окажут профессиональную поддержку.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  as={Link}
                  href={`tel:${siteConfig.company.phone}`}
                  className="bg-primary text-white px-8 py-6 text-lg font-semibold"
                  startContent={<Phone className="w-5 h-5" />}
                >
                  Срочный звонок
                </Button>
                <Button
                  as={Link}
                  // href={`https://wa.me/${siteConfig.company.whatsapp}`}
                  variant="bordered"
                  className="border-primary text-primary dark:border-primary-400 dark:text-primary-400 px-8 py-6 text-lg font-semibold"
                  startContent={<MessageCircle className="w-5 h-5" />}
                >
                  Написать в WhatsApp
                </Button>
              </div>
            </div>

            <div className="w-full h-96 bg-default-100 dark:bg-default-200 rounded-xl flex items-center justify-center">
              <span className="text-default-500 text-lg">
                Карта или фото центра
              </span>
            </div>
          </div>
        </div>
      </CommonWrapper>

      {/* Способы связи */}
      <CommonWrapper styleWrapper="mt-10">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Выберите удобный способ связи. Мы ответим в ближайшее время и
              предоставим всю необходимую информацию.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-all duration-300 border-none bg-background group hover:scale-105"
              >
                <CardBody className="p-6 text-center">
                  <div className="space-y-4">
                    <div
                      className={`p-3 bg-${method.color}-100 dark:bg-${method.color}-900/20 rounded-lg w-fit mx-auto`}
                    >
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {method.title}
                    </h3>
                    <p className="text-default-600 text-sm">
                      {method.description}
                    </p>
                    <div className="space-y-2">
                      <Button
                        as={Link}
                        href={method.link}
                        variant="light"
                        className="text-primary font-semibold"
                      >
                        {method.details}
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CommonWrapper>

      {/* График работы и транспорт */}
      <CommonWrapper styleWrapper="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* График работы */}
          <Card className="bg-background border-none">
            <CardBody className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">
                  График работы
                </h2>
              </div>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      schedule.emergency
                        ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                        : "bg-default-50 dark:bg-default-100"
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        schedule.emergency
                          ? "text-red-600 dark:text-red-400"
                          : "text-foreground"
                      }`}
                    >
                      {schedule.day}
                    </span>
                    <span
                      className={`font-semibold ${
                        schedule.emergency
                          ? "text-red-600 dark:text-red-400"
                          : "text-primary"
                      }`}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Как добраться */}
          <Card className="bg-background border-none">
            <CardBody className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">
                  Как добраться
                </h2>
              </div>
              <div className="space-y-4">
                {transportation.map((transport, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-default-50 dark:bg-default-100 rounded-lg"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {transport.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {transport.type}
                      </h3>
                      <p className="text-default-600 text-sm">
                        {transport.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </CommonWrapper>

      {/* Удобства центра */}
      <CommonWrapper styleWrapper="mt-10">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Условия пребывания
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Мы создали комфортные условия для эффективного лечения и
              восстановления наших пациентов.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="bg-background border-none text-center hover:shadow-lg transition-shadow"
              >
                <CardBody className="p-4">
                  <div className="space-y-3">
                    <div className="p-2 bg-primary/10 rounded-lg w-fit mx-auto">
                      {facility.icon}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {facility.name}
                    </h3>
                    <p className="text-default-600 text-xs">
                      {facility.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CommonWrapper>

      <GoogleMap />

      {/* Экстренная помощь */}
      <CommonWrapper styleWrapper="mt-10 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-3 bg-red-100 dark:bg-red-800 rounded-full">
              <Phone className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400">
            Экстренная помощь 24/7
          </h2>
          <p className="text-red-600 dark:text-red-400 text-lg">
            Если вам или вашему близкому требуется срочная помощь, не
            откладывайте звонок. Мы работаем круглосуточно.
          </p>
          <Button
            as={Link}
            href={`tel:${siteConfig.company.phone}`}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold"
            startContent={<Phone className="w-5 h-5" />}
          >
            Срочный вызов: {siteConfig.company.phone}
          </Button>
        </div>
      </CommonWrapper>
    </>
  );
}
