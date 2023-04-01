import React, {useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme/index.js";
import {CareerHistory} from "@/components";

const CareerContainer = (props) => {

    const theme = useRecoilValue(themeState);

    const cardBoxRefs = useRef([]);
    const cardContainer = useRef(null);


    useEffect(() => {

        const scrollEvent = () => {

            if (cardContainer.current.getBoundingClientRect().top > 0) {
                cardBoxRefs.current.forEach((current, index) => {
                    if (index === 0) {
                        current.style.position = "static";
                        current.style.transform = "none";
                        current.style.marginTop = "50%";
                    } else {
                        current.style.position = "fixed";
                        current.style.top = "100%";
                    }
                })
                return;
            }

            if (cardContainer.current.getBoundingClientRect().top <= 0) {
                cardBoxRefs.current[0].style.position = "fixed";
                cardBoxRefs.current[0].style.marginTop = 0;
                cardBoxRefs.current[0].style.left = "50%";
                cardBoxRefs.current[0].style.top = "45%";
                cardBoxRefs.current[0].style.transform = "translate(-50%)";

                const move = cardContainer.current.getBoundingClientRect().top / 5;
                const top = 100 + move;
                const targetIndex = (parseInt(-move / 55)) + 1;


                //TODO: validation 함수화
                if (0 < targetIndex - 1 && targetIndex - 1 < cardBoxRefs.current.length) cardBoxRefs.current[targetIndex - 1].style.top = "45%";
                if (0 < targetIndex + 1 && targetIndex + 1 < cardBoxRefs.current.length) cardBoxRefs.current[targetIndex + 1].style.top = "100%";
                if (0 < targetIndex && targetIndex < cardBoxRefs.current.length) cardBoxRefs.current[targetIndex].style.top = `${top + (55 * (targetIndex - 1))}%`;
            }
        }

        window.addEventListener("wheel", scrollEvent, false);
        window.addEventListener("scroll", scrollEvent, false);

        return () => {
            window.removeEventListener("wheel", scrollEvent);
            window.removeEventListener("scroll", scrollEvent);
        }
    }, [])

    return (<ContainerLayout color={theme.backGround}>
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
            {/*https://campaign.naver.com/naverhyundaicard/?eventCode=NAV08&dtm_source=naver_brandsearch&dtm_medium=search&dtm_campaign=naverhcard&pcode=naver_brandsearch_graffiti_main_img*/}
            {/* 참고 */}

            <TEST_CONTAINER ref={cardContainer}>
                <TEST ref={el => cardBoxRefs.current[0] = el}>
                    123
                </TEST>
                <TEST ref={el => cardBoxRefs.current[1] = el}>
                    456
                </TEST>
                <TEST ref={el => cardBoxRefs.current[2] = el}>
                    789
                </TEST>
            </TEST_CONTAINER>

        </CardContentBox>
    </ContainerLayout>)
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

const TEST_CONTAINER = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 50%;
  height: 6000px;

  background-color: blanchedalmond;
`

const TEST = styled.div`
  position: fixed;

  width: 100px;
  height: 100px;

  left: 50%;
  top: 100%;
  transform: translate(-50%);

  //visibility: hidden;
  //opacity: 0;

  &:nth-of-type(1) {
    position: static;
    margin-top: 50%;
    visibility: visible;
    opacity: 1;
  }

  background-color: red;

  border: 10px solid black;
`