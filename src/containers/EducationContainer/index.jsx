import React from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme";
import AppearedText from "@/components/Text/AppearedText/index.jsx";
import FlyingComponentBox from "../../components/ComponentAnimationBox/FlyingComponentBox/index.jsx";

const EducationContainer = (props) => {

    const theme = useRecoilValue(themeState);

    return (
        <ContainerLayout color={theme.backGround}>
            <TopContainerLayout>
                <FlyingComponentBox move={20}>
                    <AppearedText size={30} color={theme.main}>
                        효명 고등학교
                    </AppearedText>
                    <AppearedText size={20} color={theme.main}>
                        2012.03 ~ 2015.02 재학
                    </AppearedText>
                </FlyingComponentBox>
            </TopContainerLayout>
            <BottomContainerLayout>
                <FlyingComponentBox fromDirection={'right'} move={100}>
                    <AppearedText size={30} color={theme.main}>
                        광운 대학교
                    </AppearedText>
                    <AppearedText size={20} color={theme.main}>
                        컴퓨터공학과
                    </AppearedText>
                    <AppearedText size={20} color={theme.main}>
                        2015.03 ~ 2021.08 재학
                    </AppearedText>
                </FlyingComponentBox>
            </BottomContainerLayout>
        </ContainerLayout>
    )
}

export default EducationContainer;

const ContainerLayout = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${props => props.color};
`

const TopContainerLayout = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  //background-color: coral;
`

const BottomContainerLayout = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  //background-color: #646cff;
`


