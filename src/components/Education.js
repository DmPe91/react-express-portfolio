import { infoEducation } from "../utils/infoEducation";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Education({ info }) {
  const ref = useScrollAnimation();
  return (
    <section id="education" className="bg-slate-800  border-b-4 border-white">
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
                  <a href={el.link} target="_blank" className="underline">
                    посмотреть сертификат
                  </a>
                )}
                <p> {el.desсription}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Education;
