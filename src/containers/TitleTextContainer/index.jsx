import React, {useState} from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme";
import BounceText from "@/components/Text/BounceText";

const TitleTextContainer = (props) => {

    const [title, setTitle] = useState("Software developer!");
    const theme = useRecoilValue(themeState);

    return (
        <ContainerLayout>
            <BounceText size={90} color={theme.main}>{title}</BounceText>
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
  flex-direction: column;
`