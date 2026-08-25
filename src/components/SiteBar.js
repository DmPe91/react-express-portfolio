import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";

function SiteBar(props) {
  const ref = useScrollAnimation();
  return (
    // Добавил немного базовых стилей Tailwind для карточки, чтобы она выглядела аккуратно
    <div
      ref={ref}
      className="m-10 p-6  rounded-xl shadow-lg border border-white flex flex-col text-white transition duration-300 hover:scale-105 hover:shadow-xl scroll-animate"
    >
      <img
        src={props.el.img}
        className="border-2 border-gray-200 rounded-lg w-full object-cover"
        alt={props.el.name}
      />

      <h4 className="text-2xl mt-4 font-bold text-white">{props.el.name}</h4>

      {/* Ссылка на сайт */}
      {props.el.site && (
        <a
          href={props.el.site}
          className="text-white hover:text-blue-400  hover:underline inline-flex items-center gap-2 mt-2 font-medium"
          target="_blank"
          rel="noreferrer"
        >
          <FaExternalLinkAlt /> Посмотреть сайт
        </a>
      )}

      <p className="text-lg mt-4 font-bold text-white border-b pb-1">
        Описание:
      </p>
      <p className="text-white mt-2">{props.el.description}</p>

      <p className="text-lg mt-4 font-bold text-white border-b pb-1">Стек:</p>
      <p className="text-white mt-2">{props.el.stack}</p>

      {/* Блок с репозиториями */}
      <div className="mt-5 flex flex-wrap gap-4">
        {props.el.frontend && (
          <a
            href={props.el.frontend}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition"
            target="_blank"
            rel="noreferrer"
            title="Репозиторий Frontend"
          >
            <FaGithub className="text-xl" />
            <span className="font-semibold">Frontend</span>
            {/* Или используй иконку фронта: <FaLaptopCode className="text-xl text-blue-500" /> */}
          </a>
        )}

        {props.el.backend && (
          <a
            href={props.el.backend}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition"
            target="_blank"
            rel="noreferrer"
            title="Репозиторий Backend"
          >
            <FaGithub className="text-xl" />
            <span className="font-semibold">Backend</span>
            {/* Или используй иконку бэка: <FaServer className="text-xl text-green-600" /> */}
          </a>
        )}
      </div>

      {/* Предупреждение о бэкенде (вынесено в отдельный блок с курсивом) */}
      {props.el.backend && (
        <p className="mt-4 text-sm text-slate-800 bg-white p-3 rounded-md border border-white-200">
          ⚠️ <span className="font-semibold">Важно:</span> Backend сайта выложен
          на Render.com (бесплатный тариф) и может "засыпать". Первую подгрузку
          данных придется немного подождать)))
        </p>
      )}
    </div>
  );
}

export default SiteBar;
