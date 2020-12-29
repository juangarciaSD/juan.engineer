import React from "react";
import Div from "components/div";
import JobDiv from "ui/JobDiv";

import JobsData from "../public/data/jobs.json";
import Heading1 from "components/heading/1";

const Index = () => {
    const [jobs, setJobs] = React.useState(JobsData);
    return(
        <>
        <Div>
            <Heading1
            text="Portfolio"
            color="#000"
            fontSize="50px"
            textAlign="center"
            fontWeight="500"
            paddingBottom="38px" />
            {jobs.map((elem, idx) => (
                <JobDiv 
                    backgroundColor={elem.color}
                    src={elem.image}
                    position={elem.position}
                    status={elem.status}
                    company={elem.company}
                    type={elem.type}
                    altText={elem.alt}
                    timeline={elem.timeline}
                    href={elem.href} />
            ))}
        </Div>
        </>
    );
};

export default Index;