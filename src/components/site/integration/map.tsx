import { title } from "@/components/primitives";

const GoogleMap = () => (
  <section className="px-4 text-center mt-10 sm:px-6 lg:px-8">
    <p className={title()}>Мы находимся здесь Наши услуги</p>
    <div className="max-w-4xl mx-auto mt-5">
      <Map />
    </div>
  </section>
);

const Map = () => {
  return (
    <div className="overflow-hidden grayscale rounded-3xl shadow-xl hover:shadow-3xl transition-shadow duration-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.652923153874!2d135.06437602768705!3d48.48237062128359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efaea22a5549d6d%3A0x5da32b8176b3c079!2z0JTQktCT0JzQow!5e0!3m2!1sru!2sru!4v1740305876407!5m2!1sru!2sru"
        className="w-full h-52"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export { GoogleMap };
