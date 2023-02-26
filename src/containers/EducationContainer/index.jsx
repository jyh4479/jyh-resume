import React from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme";
import AppearedText from "@/components/Text/AppearedText/index.jsx";
import FlyingComponentBox from "../../components/ComponentAnimationBox/FlyingComponentBox/index.jsx";

const EducationContainer = (props) => {

    const theme = useRecoilValue(themeState);

    return (<ContainerLayout color={theme.backGround}>
        <ContentBox>
            <TopContentBox>
                <FlyingComponentBox move={20}>
                    <AppearedText size={40} color={theme.main}>
                        효명 고등학교
                    </AppearedText>
                    <AppearedText size={25} color={theme.main}>
                        - 2012.03 ~ 2015.02 재학
                    </AppearedText>
                </FlyingComponentBox>
            </TopContentBox>
        </ContentBox>
        <ContentBox>
            <BottomContentBox>
                <FlyingComponentBox fromDirection={'right'} move={100}>
                    <AppearedText size={40} color={theme.main}>
                        광운 대학교
                    </AppearedText>
                    <AppearedText size={25} color={theme.main}>
                        - 컴퓨터공학과
                    </AppearedText>
                    <AppearedText size={25} color={theme.main}>
                        - 2015.03 ~ 2021.08 재학
                    </AppearedText>
                </FlyingComponentBox>
            </BottomContentBox>
        </ContentBox>
    </ContainerLayout>)
}

export default EducationContainer;

const ContainerLayout = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${props => props.color};
`

const ContentBox = styled.div`
  width: 100%;
  height: 50%;
`

const TopContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 300px;

  //background-color: coral;
`

const BottomContentBox = styled.div`
  width: calc(100% - 300px); // margin-right 대체
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  //background-color: #646cff;
`


