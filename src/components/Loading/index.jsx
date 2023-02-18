import React from 'react';
import styled from "@emotion/styled";
import {NormalText} from "@/components/Text/index.js";

const Loading = (props) => {

    const {percent = 0, color = "#000000"} = props;

    return (
        <LoadingBox>
            <NormalText size={100} color={color}>{percent}%</NormalText>
        </LoadingBox>
    )
}

export default Loading;

const LoadingBox = styled.div``
