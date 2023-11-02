import { infoSkills } from "../utils/infoSkills";
import { infoSite } from "../utils/infoSite";
import SiteBar from "../components/SiteBar";
import SkillsBar from "../components/SkillsBar";
import Header from "../components/Header";
import Description from "../components/Description";
import Education from "../components/Education";

function Main() {
  return (
    <div className="max-w-screen-2xl ml-auto mr-auto">
      <Header />
      <Description />
      <div className="bg-slate-800 flex flex-row border-b-4 border-white text-white">
        <div className="m-10">
          <h3 className="text-5xl font-semibold">Навыки</h3>
          <p className="text-2xl font-semibold">Что я умею?</p>
        </div>
        <div className="grid grid-cols-2 ">
          {infoSkills.map((el) => (
            <SkillsBar info={el} />
          ))}
        </div>
      </div>
      <Education />
      <div className="bg-slate-800 flex flex-row border-b-4 border-white text-white">
        <div className="m-10">
          <h3 className="text-5xl font-semibold">Портфолио</h3>
          <p className="text-2xl font-semibold">Примеры моих работ</p>
        </div>
        <div className="grid grid-cols-2">
          {infoSite.map((el) => (
            <SiteBar el={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
