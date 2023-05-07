import React, {useRef} from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme/index.js";
import {Card, CareerHistory} from "@/components";
import {BounceText, NormalText} from "@/components/Text";

import {useCardScrollEvent} from "@/containers/CareerContainer/hooks/useCardScrollEvent.js";
import {useTitleScrollEvent} from "@/containers/CareerContainer/hooks/useTitleScrollEvent.js";
import {useBackGroundScrollEvent} from "@/containers/CareerContainer/hooks/useBackGroundScrollEvent.js";

const CareerContainer = () => {

    const theme = useRecoilValue(themeState);

    const cardContainer = useRef(null);
    const cardContainerTitle = useRef(null);
    const cardBoxRefs = useRef([]);

    useBackGroundScrollEvent(cardBoxRefs);
    useCardScrollEvent(cardContainer, cardBoxRefs);
    useTitleScrollEvent(cardContainer, cardContainerTitle);

    return (
        <ContainerLayout color={theme.backGround}>
            <TimeContentBox>
                <CareerHistory textColor={theme.text} lineColor={theme.button}>
                    <CareerHistory.Content>
                        <CareerHistory.Title>
                            <CareerNormalText color={theme.main} size={25}>NAVER finanacial</CareerNormalText>
                        </CareerHistory.Title>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>2021.01 ~ 2021.02 (인턴)</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text mt={20}>
                            <CareerNormalText color={theme.main}>Backend developer</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text mt={5}>
                            <CareerNormalText color={theme.main}>- Spring framework</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>- Spring cloud gateway</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>- MyBatis</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>- MariaDB</CareerNormalText>
                        </CareerHistory.Text>
                    </CareerHistory.Content>

                    <CareerHistory.Content>
                        <CareerHistory.Title mt={10}>
                            <CareerNormalText color={theme.main} size={25}>Kolon benit</CareerNormalText>
                        </CareerHistory.Title>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>2021.04 ~ 2021.06 (인턴)</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text mt={20}>
                            <CareerNormalText color={theme.main}>Frontend developer</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text mt={5}>
                            <CareerNormalText color={theme.main}>- React</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>- Redux</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>- Chart js</CareerNormalText>
                        </CareerHistory.Text>
                    </CareerHistory.Content>

                    <CareerHistory.Content>
                        <CareerHistory.Title>
                            <CareerNormalText color={theme.main} size={25}>Kolon benit</CareerNormalText>
                        </CareerHistory.Title>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>2021.07 ~ 2022.02 (주임)</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text mt={20}>
                            <CareerNormalText color={theme.main}>Software developer</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text mt={5}>
                            <CareerNormalText color={theme.main}>- React</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>- Electron</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>- Spring framework</CareerNormalText>
                        </CareerHistory.Text>
                    </CareerHistory.Content>

                    <CareerHistory.Content>
                        <CareerHistory.Title mt={10}>
                            <CareerNormalText color={theme.main} size={25}>Tmax tibero</CareerNormalText>
                        </CareerHistory.Title>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>2022.03 ~ 재직중 (연구원)</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text mt={20}>
                            <CareerNormalText color={theme.main}>Frontend developer</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text mt={5}>
                            <CareerNormalText color={theme.main}>- React</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>- Mobx</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>- Chart js</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>- D3</CareerNormalText>
                        </CareerHistory.Text>
                        <CareerHistory.Text>
                            <CareerNormalText color={theme.main}>- Docker</CareerNormalText>
                        </CareerHistory.Text>
                    </CareerHistory.Content>
                </CareerHistory>
            </TimeContentBox>
            <CardContentBox>
                <CardContentScrollBox ref={cardContainer}>
                    <BounceText size={30} ref={cardContainerTitle}>
                        Career card
                    </BounceText>
                    <CardContent ref={el => cardBoxRefs.current[0] = el}>
                        123
                    </CardContent>
                    <CardContent ref={el => cardBoxRefs.current[1] = el}>
                        456
                    </CardContent>
                    <CardContent ref={el => cardBoxRefs.current[2] = el}>
                        789
                    </CardContent>
                </CardContentScrollBox>
            </CardContentBox>
            <CardEndBox/>
        </ContainerLayout>
    )
}

export default CareerContainer;

const ContainerLayout = styled.div`
  width: 100vw;

  background-color: ${props => props.color};
`

const TimeContentBox = styled.div`
  width: 100%;
  height: 40vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

const CardContentBox = styled.div`
  position: relative;

  width: 100%;
  //height: 60%;

  display: flex;
  justify-content: center;
`

const CardContentScrollBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 50%;
  height: 5000px;

  background-color: blanchedalmond;
`

const CardContent = styled(Card)`
  position: absolute;

  left: 50%;
  top: 100%;
  transform: translate(-50%);

  &:nth-of-type(1) {
    position: static;
    visibility: visible;
    opacity: 1;
  }
`

const CardEndBox = styled.div`
  width: 100%;
  height: 100vh;

  background-color: yellow;
`

const CareerNormalText = styled(NormalText)`
  white-space: nowrap;
`

