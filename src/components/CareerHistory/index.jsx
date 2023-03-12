import React from 'react';
import styled from "@emotion/styled";

const CareerHistory = (props) => {

    const {children} = props;

    return (
        <CareerHistoryContainer>
            <CareerHistoryLine>
                {children}
            </CareerHistoryLine>
        </CareerHistoryContainer>
    );
};

const CareerHistoryLine = (props) => {

    const {children} = props;

    return (
        <DirectionLine>
            {children}
        </DirectionLine>
    );
}

const CareerHistoryContent = () => {

}

const CareerHistoryImage = () => {

}

// CareerHistory.Line = CareerHistoryLine;
CareerHistory.Content = CareerHistoryContent;
CareerHistory.Image = CareerHistoryImage;


export default CareerHistory;

const CareerHistoryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-color: #747bff;
`

const DirectionLine = styled.div`
  position: absolute;
  width: 500px;
  height: 10px;
  background-color: blue;
  border-radius: 100px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 10px;
    background-color: blue;
    border-radius: 100px;
    right: 0px;
    
    transform: translateY(-50%) rotate(45deg);
  }

  &::before {
    position: absolute;
    content: "";
    width: 20px;
    height: 10px;
    background-color: blue;
    border-radius: 100px;
    right: 0px;

    transform: translateY(50%) rotate(-45deg);
  }
`