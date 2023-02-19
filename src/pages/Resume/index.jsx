import React from 'react';
import {EducationContainer, LoadingContainer, PageContainer, TitleTextContainer} from "@/containers/index.js";

const Resume = (props) => {

    return (
        <PageContainer>
            <TitleTextContainer/>
            <LoadingContainer>
                <EducationContainer/>
            </LoadingContainer>
        </PageContainer>
    )
};

export default Resume;