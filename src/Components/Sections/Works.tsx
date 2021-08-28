import { PlatubiJob, RESTJob } from "../../config/Jobs";
import { Separator } from "../../styles/Index";
import { JobSectionContainer } from "../../styles/Sections/Works";
import SectionSeparator from "../Molecules/SectionSeparator";
import Jobs from "../Organisms/Job";


const Works = () => {
  return (
    <JobSectionContainer id="jobs">
      <SectionSeparator text="Mis trabajos" position="left" />
      <Separator height={36} width={16} />
      <Jobs obj={PlatubiJob} />
      <Separator height={36} width={16} />
      <Jobs obj={RESTJob} />
    </JobSectionContainer>
  );
};

export default Works;
