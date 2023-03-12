import React from 'react';
import {EducationContainer, LoadingContainer, PageContainer, TitleTextContainer} from "@/containers/index.js";
import CareerContainer from "@/containers/CareerContainer/index.jsx";

const Resume = (props) => {

    return (
        <PageContainer>
            <TitleTextContainer/>
            <LoadingContainer>
                <EducationContainer/>
                <CareerContainer/>
            </LoadingContainer>
        </PageContainer>
    )
};

export default Resume;