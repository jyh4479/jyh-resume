import React from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme";

const EducationContainer = (props) => {

    const theme = useRecoilValue(themeState);

    return (
        <ContainerLayout>
            Education Container
        </ContainerLayout>
    )
}

export default EducationContainer;

const ContainerLayout = styled.div`
  width: 100vw;
  height: 100vh;
  
  background-color: #888888;
`
