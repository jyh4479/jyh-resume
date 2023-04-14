import React, {useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme/index.js";
import {Card, CareerHistory} from "@/components";
import BounceText from "../../components/Text/BounceText/index.jsx";

const CareerContainer = (props) => {

    const theme = useRecoilValue(themeState);

    const cardContainer = useRef(null);
    const cardContainerTitle = useRef(null);
    const cardBoxRefs = useRef([]);


    useEffect(() => {

        const componentScrollEvent = (e) => {
            // Scroll 동작이 window가 아니라 특정 component에 붙어있기 때문에 class name으로 scroll 붙어있는 component에 접근
            document.querySelector(".main-page").scrollBy(0, e.deltaY);
        }

        const scrollEvent = () => {

            const TOP_POSITION = 20;
            const BOTTOM_POSITION = 100;
            const REVERSE_TOP_POSITION = BOTTOM_POSITION - TOP_POSITION;

            if (cardContainer.current.getBoundingClientRect().top > 0) {
                cardBoxRefs.current.forEach((current, index) => {
                    if (index === 0) {
                        current.style.position = "static";
                        current.style.transform = "none";
                        current.style.marginTop = "22%";
                    } else {
                        current.style.position = "fixed";
                        current.style.top = "100%";
                    }
                })
                return;
            }

            if (cardContainer.current.getBoundingClientRect().top <= 0) {
                cardContainerTitle.current.style.position = "fixed";
                cardContainerTitle.current.style.left = "50%";
                cardContainerTitle.current.style.top = `${TOP_POSITION - 10}%`;
                cardContainerTitle.current.style.transform = "translate(-50%)";
                cardContainerTitle.current.style.zIndex = 9999;


                cardBoxRefs.current[0].style.position = "fixed";
                cardBoxRefs.current[0].style.marginTop = 0;
                cardBoxRefs.current[0].style.left = "50%";
                cardBoxRefs.current[0].style.top = `${TOP_POSITION}%`;
                cardBoxRefs.current[0].style.transform = "translate(-50%)";

                //The move number by scroll event
                const move = cardContainer.current.getBoundingClientRect().top / 25;

                //Current animation box top position
                const top = BOTTOM_POSITION + move;

                //Current target component index
                const targetIndex = (parseInt(-move / REVERSE_TOP_POSITION)) + 1;


                //TODO: validation 함수화
                if (0 < targetIndex - 1 && targetIndex - 1 < cardBoxRefs.current.length) cardBoxRefs.current[targetIndex - 1].style.top = `${TOP_POSITION}%`;
                if (0 < targetIndex + 1 && targetIndex + 1 < cardBoxRefs.current.length) cardBoxRefs.current[targetIndex + 1].style.top = "100%";
                if (0 < targetIndex && targetIndex < cardBoxRefs.current.length) cardBoxRefs.current[targetIndex].style.top = `${top + (REVERSE_TOP_POSITION * (targetIndex - 1))}%`;
            }
        }

        window.addEventListener("wheel", scrollEvent, false);
        window.addEventListener("scroll", scrollEvent, false);

        cardBoxRefs.current.forEach(ref => {
            ref.addEventListener("wheel", componentScrollEvent);
            ref.addEventListener("scroll", componentScrollEvent);
        })

        return () => {
            window.removeEventListener("wheel", scrollEvent);
            window.removeEventListener("scroll", scrollEvent);

            cardBoxRefs.current.forEach(ref => {
                ref.removeEventListener("wheel", componentScrollEvent);
                ref.removeEventListener("scroll", componentScrollEvent);
            })
        }
    }, [cardBoxRefs.current])

    return (
        <ContainerLayout color={theme.backGround}>
            <TimeContentBox>
                <CareerHistory>

                    <CareerHistory.Content>
                        <CareerHistory.Image/>
                        <CareerHistory.Title/>
                        <CareerHistory.Text/>
                    </CareerHistory.Content>

                    <CareerHistory.Content>
                        <CareerHistory.Image/>
                        <CareerHistory.Title/>
                        <CareerHistory.Text/>
                    </CareerHistory.Content>

                    <CareerHistory.Content>
                        <CareerHistory.Image/>
                        <CareerHistory.Title/>
                        <CareerHistory.Text/>
                    </CareerHistory.Content>

                    <CareerHistory.Content>
                        <CareerHistory.Image/>
                        <CareerHistory.Title/>
                        <CareerHistory.Text/>
                    </CareerHistory.Content>
                </CareerHistory>
            </TimeContentBox>
            <CardContentBox>
                <CardContentScrollBox ref={cardContainer}>
                    {/*FIXME: ref 이름 그대로 props로 넘길 수 없음*/}
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
        </ContainerLayout>
    )
}

export default CareerContainer;

const ContainerLayout = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${props => props.color};
`

const TimeContentBox = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: coral;
`

const CardContentBox = styled.div`
  position: relative;

  width: 100%;
  height: 60%;

  display: flex;
  justify-content: center;

  background-color: coral;

`

const CardContentScrollBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 50%;
  height: 6000px;

  background-color: blanchedalmond;
`

const CardContent = styled(Card)`
  position: absolute;

  left: 50%;
  top: 100%;
  transform: translate(-50%);

  //visibility: hidden;
  //opacity: 0;

  &:nth-of-type(1) {
    position: static;
    margin-top: 35%;
    visibility: visible;
    opacity: 1;
  }
`