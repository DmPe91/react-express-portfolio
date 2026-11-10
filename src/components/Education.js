import { useState } from "react";
import { infoEducation } from "../utils/infoEducation";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Education({ info }) {
  const ref = useScrollAnimation();
  const [modalImage, setModalImage] = useState(null);

  return (
    <section id="education" className="bg-slate-800 border-b-4 border-white">
      <div
        ref={ref}
        className="text-white max-w-7xl ml-auto mr-auto scroll-animate"
      >
        <div className="p-10">
          <h2 className="text-2xl md:text-5xl font-semibold">Образование</h2>
          <p className="text-xl font-semibold">Где получаю знания?</p>
        </div>
        <ul className="m-10">
          {infoEducation.map((el) => (
            <li className="mt-10" key={el.name}>
              <div>
                <p>{el.date}</p>
                <p className="text-2xl font-semibold">{el.name}</p>

                {el.link && (
                  <a
                    href={el.link}
                    target="_blank"
                    rel="noreferrer"
                    className="underline block mb-4"
                  >
                    посмотреть на сайте
                  </a>
                )}

                <p>{el.description}</p>

                {/* Превью сертификатов */}
                {el.certificates && el.certificates.length > 0 && (
                  <div className="mt-4">
                    <p className="font-semibold mb-3">
                      Сертификаты (нажмите для увеличения):
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {el.certificates.map((cert, idx) => (
                        <div
                          key={idx}
                          onClick={() => setModalImage(cert.file)}
                          className="cursor-pointer group relative"
                        >
                          <img
                            src={cert.file}
                            alt={cert.name}
                            className="w-full h-auto rounded-lg border-2 border-slate-600 group-hover:border-blue-500 transition-colors shadow-lg"
                          />
                          <div className="mt-2 text-center text-sm">
                            {cert.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Модальное окно */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-red-500"
            onClick={() => setModalImage(null)}
          >
            ×
          </button>
          <img
            src={modalImage}
            alt="Сертификат"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Education;
