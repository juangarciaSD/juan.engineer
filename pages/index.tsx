import React from "react";
import Div from "components/div";
import JobDiv from "ui/JobDiv";
import Heading1 from "components/heading/1";

//jobs json file
import JobsData from "../public/data/jobs.json";

const Index = () => {
    const [jobs, setJobs] = React.useState(JobsData);
    return(
        <>
        {/* <section>
            <span>Hello World</span>
        </section> */}
        <Div
            padding="15px 0px 50px"
            backgroundColor="#212121">
            <Heading1
            text="Portfolio"
            color="#fff"
            fontSize="50px"
            textAlign="center"
            fontWeight="500"
            paddingBottom="38px" />
            {jobs.map((elem, idx) => (
                <JobDiv 
                    key={elem.id}
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