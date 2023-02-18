import React from 'react';
import ToggleButton from "@/components/ToggleButton/index.jsx";
import {PageContainer, LoadingContainer, TitleTextContainer} from "@/containers/index.js";

const Resume = (props) => {

    return (
        <PageContainer>
            <TitleTextContainer/>
            <LoadingContainer>
                <div>loading complete!</div>
            </LoadingContainer>
        </PageContainer>
    )
};

export default Resume;