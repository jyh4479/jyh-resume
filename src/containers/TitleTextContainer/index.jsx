import React from 'react';
import styled from "@emotion/styled";
import {NormalText} from "@/components/Text";

const TitleTextContainer = (props) => {
    return (
        <ContainerLayout>
            <NormalText size={90}>Front end 개발자 정용훈</NormalText>
        </ContainerLayout>
    )
}

export default TitleTextContainer;

const ContainerLayout = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: red;
`