import { subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";

export function Footer() {
  return (
    <footer className="container mx-auto mt-auto py-12">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold mb-2">{siteConfig.company.name}</p>
            <p className="text-sm text-gray-400">
              2025 &copy; Все права защищены
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href={`tel:${siteConfig.company.phone}`}
              className={subtitle()}
            >
              {siteConfig.company.phone}
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="text-center">
            <p className="text-sm text-gray-400/80 hover:text-gray-300 transition-colors duration-300">
              Сайт разработан с{" "}
              <span className="text-red-500 animate-pulse">❤️</span> командой{" "}
              <Link
                href={siteConfig.partners.web}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300"
              >
                {siteConfig.partners.name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
