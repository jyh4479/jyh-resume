import React from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme";
import AppearedText from "@/components/Text/AppearedText/index.jsx";
import FlyingComponentBox from "@/components/ComponentAnimationBox/FlyingComponentBox/index.jsx";
import {RotateImage} from "@/components/Image";

import SCHOOL from "@/assets/image/highSchool/school.png";
import DORMITORY from "@/assets/image/highSchool/dormitory.png";

const EducationContainer = (props) => {

    const theme = useRecoilValue(themeState);

    return (
        <ContainerLayout color={theme.backGround}>
            <ContentBox>
                <TopTitleContentBox>
                    <FlyingComponentBox move={20}>
                        <AppearedText size={40} color={theme.main}>
                            효명 고등학교
                        </AppearedText>
                        <AppearedText size={25} color={theme.main}>
                            - 2012.03 ~ 2015.02 재학
                        </AppearedText>
                    </FlyingComponentBox>
                </TopTitleContentBox>
                <TopImageContentBox>
                    <RotateImage>
                        <RotateImage.Content src={SCHOOL} width={300} color={theme.button}/>
                        <RotateImage.Content src={DORMITORY} width={300} color={theme.button}/>
                        <RotateImage.Content src={SCHOOL} width={300} color={theme.button}/>
                        <RotateImage.Content src={DORMITORY} width={300} color={theme.button}/>
                    </RotateImage>
                </TopImageContentBox>
            </ContentBox>
            <ContentBox>
                <BottomTitleContentBox>
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
                </BottomTitleContentBox>
                <BottomImageContentBox>
                    <RotateImage>
                        <RotateImage.Content src={SCHOOL} width={300} color={theme.button}/>
                        <RotateImage.Content src={DORMITORY} width={300} color={theme.button}/>
                        <RotateImage.Content src={SCHOOL} width={300} color={theme.button}/>
                        <RotateImage.Content src={DORMITORY} width={300} color={theme.button}/>
                    </RotateImage>
                </BottomImageContentBox>
            </ContentBox>
        </ContainerLayout>
    )
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

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`

const TopTitleContentBox = styled.div`
  width: calc(100% - 300px); // margin-left 만큼 빼줌
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 300px;

  //background-color: coral;
`

const TopImageContentBox = styled.div`
  width: 690px;
  position: absolute;
  right: 0px;
`

const BottomTitleContentBox = styled.div`
  width: calc(100% - 300px); // margin-right 대체
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  //background-color: #646cff;
`

const BottomImageContentBox = styled.div`
  width: 690px;
  position: absolute;
  left: 250px;
`


