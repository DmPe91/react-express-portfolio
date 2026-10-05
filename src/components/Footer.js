import { infoPerson } from "../utils/infoPerson";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const ref = useScrollAnimation();

  return (
    <footer className="bg-slate-900 border-t-4 border-white text-white">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 scroll-animate"
      >
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Все права защищены.
        </p>

        <div className="flex flex-col justify-between">
          <div className="flex flex-row gap-3 border-white border-b-2 py-3">
            <a
              href={`tel:${infoPerson.phone}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <img
                className="w-5 h-5 opacity-80"
                src="/react-express-portfolio/SocialIcon/icons8-телефон-30.png"
                alt="phone"
              />
              <span className="text-sm font-medium">{infoPerson.phone}</span>
            </a>
            <a
              href={`mailto:${infoPerson.email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <img
                className="w-5 h-5 opacity-80"
                src="/react-express-portfolio/SocialIcon/icons8-почта-50.png"
                alt="email"
              />
              <span className="text-sm font-medium">{infoPerson.email}</span>
            </a>
            <div className="flex flex-row gap-1">
              <a
                href={infoPerson.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  className="w-8 h-8"
                  src="/react-express-portfolio/SocialIcon/icons8-телеграм-50.png"
                  alt="telegram"
                />
              </a>
              <a
                href={infoPerson.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  className="w-8 h-8"
                  src="/react-express-portfolio/SocialIcon/icons8-github-50.png"
                  alt="github"
                />
              </a>
              <a
                href={infoPerson.max}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  className="w-8 h-8"
                  src="/react-express-portfolio/SocialIcon/Max_logo-32x32.png"
                  alt="max"
                />
              </a>
            </div>
          </div>
          <div className="border-white border-t-2 text-center py-3">
            <nav className="flex justify-between">
              <a
                href="#skills"
                className="text-base text-white ext-base font-medium text-slate-300 hover:text-white relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                Навыки
              </a>
              <a
                href="#portfolio"
                className="text-base text-white ext-base font-medium text-slate-300 hover:text-white relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                Портфолио
              </a>
              <a
                href="#education"
                className="text-base text-white ext-base font-medium text-slate-300 hover:text-white relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                Образование
              </a>
              <a
                href="#contacts"
                className="text-base text-white ext-base font-medium text-slate-300 hover:text-white relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="text-slate-400 hover:text-white transition text-sm"
        >
          ↑ Наверх
        </button>
      </div>
    </footer>
  );
}

export default Footer;
