import React, {useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme/index.js";
import {CareerHistory} from "@/components";

const CareerContainer = (props) => {

    const theme = useRecoilValue(themeState);

    const cardBoxRef = useRef(null);
    

    useEffect(() => {

        const scrollEvent = () => {

            console.log(cardBoxRef.current.getBoundingClientRect().top)

            if (cardBoxRef.current.getBoundingClientRect().top <= 0) {
                cardBoxRef.current.style.position = "fixed";
                cardBoxRef.current.style.left = "50%";
                cardBoxRef.current.style.top = 0;
                cardBoxRef.current.style.transform = "translate(-50%)";
            } else {
                cardBoxRef.current.style.position = "static";
                cardBoxRef.current.style.transform = "none";
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

            <TEST_CONTAINER>
                <TEST ref={cardBoxRef}>
                    123
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
  width: 100px;
  height: 6000px;

  background-color: blanchedalmond;
`

const TEST = styled.div`
  width: 100px;
  height: 100px;

  background-color: red;
`