import BasedIn from "./BasedIn";
import CodingSince from "./CodingSince";
import AboutSummary from "./AboutSummary";
import SkillsAndActivity from "./SkillsAndActivity";

export default function HomeAboutSection() {
  return (
    <div className="mb-20">
      <div className="flex flex-col gap-4 md:flex-row md:gap-2.5">
        <div className="grid flex-[2.7] grid-cols-1 gap-2.5">
          <AboutSummary />
        </div>
        <div className="flex flex-[3] flex-col gap-2.5">
          <SkillsAndActivity />
        </div>
        <div className="grid flex-[2.7] grid-cols-1 gap-2.5">
          <CodingSince />
          <BasedIn />
        </div>
      </div>
    </div>
  );
}
