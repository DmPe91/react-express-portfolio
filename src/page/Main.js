import Header from "../components/Header";
import Description from "../components/Description";
import Portfolio from "../components/Portfolio";
import SkillsBar from "../components/SkillsBar";
import Education from "../components/Education";
import Footer from "../components/Footer";

function Main() {
  return (
    <div className="ml-auto mr-auto">
      <Header />

      <Description />

      <Portfolio />

      <SkillsBar />

      <Education />

      <Footer />
    </div>
  );
}

export default Main;
