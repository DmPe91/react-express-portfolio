import { infoSkills } from "../utils/infoSkills";
import useScrollAnimation from "../hooks/useScrollAnimation";

function SkillsBar(props) {
  const ref = useScrollAnimation();
  return (
    <section id="skills" className="bg-slate-900  border-b-4 border-white">
      <div
        ref={ref}
        className="text-white max-w-7xl ml-auto mr-auto scroll-animate"
      >
        <div className="p-10">
          <h3 className="text-3xl md:text-5xl font-semibold">Навыки</h3>
          <p className="text-xl md:text-2xl font-semibold">Что я умею?</p>
        </div>
        <div className="md:grid grid-cols-2 ">
          {infoSkills.map((el) => (
            <div
              key={el.name}
              className="p-10 transition duration-300 hover:bg-slate-700 rounded-lg"
            >
              <div className="flex flex-col items-center text-center">
                <img src={el.avatar} alt={el.name} className="w-16 h-16 mb-4" />
                <h4 className="text-2xl font-semibold mb-2">{el.name}</h4>
                <p className="text-slate-300">{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsBar;
