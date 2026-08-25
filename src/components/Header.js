import { infoPerson } from "../utils/infoPerson";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Header() {
  const ref = useScrollAnimation();
  return (
    <header
      id="contacts"
      className="bg-slate-800  border-b-4 border-t-4 border-white p-5"
    >
      <div ref={ref} className="max-w-7xl ml-auto mr-auto scroll-animate">
        <div className="flex flex-col lg:flex-row justify-between  py-4">
          <div className="flex justify-center flex-col-reverse sm:flex-row items-center gap-3">
            <div className="relative group">
              {/* Фоновое свечение за аватаром (Glow эффект) */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img
                className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-slate-700 shadow-2xl"
                src={infoPerson.avatar}
                alt="avatar"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                {infoPerson.name}
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-blue-400 mt-2">
                {infoPerson.position}
              </p>
              <p className="text-lg text-slate-300 mt-3 max-w-xl mx-auto md:mx-0">
                {infoPerson.stack}
              </p>
              <p className="text-md text-slate-400 mt-4 flex items-center justify-center gap-2">
                <span>📍</span> {infoPerson.address}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-5">
            <div className="flex flex-wrap sm:flex-nowrap justify-center lg:justify-between flex-row gap-3 py-3">
              <a
                href={`tel:${infoPerson.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <img
                  className="w-5 h-5 opacity-80"
                  src="/SocialIcon/icons8-телефон-30.png"
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
                  src="/SocialIcon/icons8-почта-50.png"
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
                    src="/SocialIcon/icons8-телеграм-50.png"
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
                    src="/SocialIcon/icons8-github-50.png"
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
                    src="/SocialIcon/Max_logo-32x32.png"
                    alt="max"
                  />
                </a>
              </div>
            </div>
            <div className="text-center py-3">
              <nav className="flex flex-wrap sm:flex-nowrap justify-center gap-3 lg:justify-between">
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
        </div>
      </div>
    </header>
  );
}

export default Header;
