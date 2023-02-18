import React, {useState} from 'react';
import styled from "@emotion/styled";
import {NormalText} from "@/components/Text";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme/index.js";

const TitleTextContainer = (props) => {

    const [title, setTitle] = useState("Front end 개발자 정용훈!");
    const theme = useRecoilValue(themeState);

    return (
        <ContainerLayout>
            <NormalText size={90} color={theme.main}>{title}</NormalText>
        </ContainerLayout>
    )
}

export default TitleTextContainer;

const ContainerLayout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`