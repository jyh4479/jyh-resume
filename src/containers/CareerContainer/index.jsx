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
                cardBoxRefs.current[0].style.position = "static";
                cardBoxRefs.current[0].style.transform = "none";
                cardBoxRefs.current[0].style.marginTop = "50%";
                return;
            }

            if (cardContainer.current.getBoundingClientRect().top <= 0) {
                cardBoxRefs.current[0].style.position = "fixed";
                cardBoxRefs.current[0].style.marginTop = 0;
                cardBoxRefs.current[0].style.left = "50%";
                cardBoxRefs.current[0].style.top = "26%";
                cardBoxRefs.current[0].style.transform = "translate(-50%)";
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
  margin-top: 50%;

  width: 100px;
  height: 100px;

  background-color: red;
`