import React, {useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled";

const CONTENT_WIDTH = 400;
const CONTENT_HEIGHT = 400;

const TEXT_BOX_WIDTH = 300;
const TEXT_BOX_HEIGHT = 200;

const CareerHistory = (props) => {

    const {children} = props;

    const lineRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);

    useEffect(() => {
        setLineWidth(lineRef.current?.childNodes?.length * CONTENT_WIDTH);
    }, [])

    return (
        <CareerHistoryContainer>
            <DirectionLine width={lineWidth}/>
            <DirectionLineContentBox ref={lineRef}>
                {children}
            </DirectionLineContentBox>
        </CareerHistoryContainer>
    );
};

const CareerHistoryContent = (props) => {

    const {children} = props;

    return (
        <ContentBox>
            {children}
        </ContentBox>
    )
}

const CareerHistoryImage = () => {
    return (
        <div></div>
    )
}

const CareerHistoryTitle = () => {
    return (
        <div></div>
    )
}
const CareerHistoryText = () => {
    return (
        <div></div>
    )
}

CareerHistory.Content = CareerHistoryContent;
CareerHistory.Image = CareerHistoryImage;
CareerHistory.Title = CareerHistoryTitle;
CareerHistory.Text = CareerHistoryText;


export default CareerHistory;

const CareerHistoryContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  background-color: #747bff;
`

const DirectionLine = styled.div`
  position: absolute;
  width: ${props => props.width}px;
  height: 10px;
  background-color: blue;
  border-radius: 100px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  &::after {
    position: absolute;
    z-index: 1;
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
    z-index: 1;
    content: "";
    width: 20px;
    height: 10px;
    background-color: blue;
    border-radius: 100px;
    right: 0px;

    transform: translateY(50%) rotate(-45deg);
  }
`

const DirectionLineContentBox = styled.div`
  position: absolute;
  
  height: 100%;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
`

const ContentBox = styled.div`
  position: relative;

  width: ${CONTENT_WIDTH}px;

  height: 50%;

  &:nth-of-type(even) {
    background-color: red;
    top: 50%;
  }

  &:nth-of-type(odd) {
    background-color: blue;
  }

  opacity: 0.5;
`
