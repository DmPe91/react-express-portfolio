import { useState } from "react";
import { infoSite } from "../utils/infoSite";
import SiteBar from "../components/SiteBar";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("commercial");
  const ref = useScrollAnimation();

  const tabs = [
    { id: "commercial", label: "💼 Коммерческие" },
    { id: "pet", label: "🚀 Pet-проекты" },
  ];

  const filteredProjects = infoSite.filter((project) => {
    if (activeTab === "pet") {
      return (
        project.category === "fullstack" || project.category === "integrations"
      );
    }
    return project.category === "commercial";
  });

  return (
    <section id="portfolio" className="bg-slate-800  border-b-4 border-white">
      <div className="text-white max-w-7xl ml-auto mr-auto">
        <div className="p-10">
          <h3 className="text-3xl md:text-5xl font-semibold">Портфолио</h3>
          <p className="text-xl md:text-2xl font-semibold">
            Примеры моих работ
          </p>
        </div>

        <div ref={ref} className="scroll-animate">
          {/* Кнопки табов */}
          <div className="flex gap-4 px-10 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-white text-slate-800"
                    : "bg-slate-700 text-white hover:bg-slate-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Отфильтрованные проекты */}
          <div className="md:grid grid-cols-2 sm:p-10">
            {filteredProjects.map((el) => (
              <SiteBar key={el.name} el={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
