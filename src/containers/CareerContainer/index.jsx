import React, {useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme/index.js";
import {CareerHistory} from "@/components";

const CareerContainer = (props) => {

    const theme = useRecoilValue(themeState);

    const cardBoxRef = useRef(null);

    useEffect(() => {

        window.addEventListener("wheel", function () {
            if (cardBoxRef.current.getBoundingClientRect().top < 3 && cardBoxRef.current.getBoundingClientRect().top > -3) console.log("상단임")
        }, false);

        window.addEventListener("scroll", function () {
            console.log(123);
        }, false);

        // const domObserver = new IntersectionObserver(e => {
        //     e.forEach(cardBox => {
        //         console.log(cardBox.target.getBoundingClientRect().top)
        //         if (cardBox.target.getBoundingClientRect().top === 0) {
        //             console.log(cardBox.target.getBoundingClientRect().top)
        //             console.log("상단이여")
        //         }
        //     })
        // });
        // domObserver.observe(cardBoxRef.current);
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

            <TEST ref={cardBoxRef}>
                123
            </TEST>
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
  width: 100%;
  height: 60%;

  display: flex;
  justify-content: center;

  background-color: coral;

`

const TEST = styled.div`
  width: 100px;
  height: 6000px;

  background-color: red;
`