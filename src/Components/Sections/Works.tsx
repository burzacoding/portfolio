import { PlatubiJob, RESTJob } from "../../config/Jobs";
import { Separator } from "../../styles/Index";
import { JobSectionContainer } from "../../styles/Sections/Works";
import SectionSeparator from "../Molecules/SectionSeparator";
import Jobs from "../Organisms/Job";


const Works = () => {
  return (
    <JobSectionContainer>
      <SectionSeparator text="Mis trabajos" position="left" id="#jobs" />
      <Separator height={36} width={16} />
      <Jobs obj={PlatubiJob} />
      <Separator height={36} width={16} />
      <Jobs obj={RESTJob} />
    </JobSectionContainer>
  );
};

export default Works;
