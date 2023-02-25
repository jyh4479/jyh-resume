import React from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme";
import AppearedText from "@/components/Text/AppearedText/index.jsx";

const EducationContainer = (props) => {

    const theme = useRecoilValue(themeState);

    return (
        <ContainerLayout color={theme.backGround}>
            <AppearedText>
                Education Container
            </AppearedText>
        </ContainerLayout>
    )
}

export default EducationContainer;

const ContainerLayout = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${props => props.color};
`
