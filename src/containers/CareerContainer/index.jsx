import React from 'react';
import styled from "@emotion/styled";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme/index.js";
import {CareerHistory} from "@/components";

const CareerContainer = (props) => {

    const theme = useRecoilValue(themeState);

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
                </CareerHistory>
            </TimeContentBox>
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
  height: 30%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: coral;
`