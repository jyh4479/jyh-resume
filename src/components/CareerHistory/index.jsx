import React, {useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled";

const CONTENT_WIDTH = 400;
const CONTENT_HEIGHT = 400;

const TEXT_BOX_WIDTH = 300;
const TEXT_BOX_HEIGHT = 200;

const CareerHistory = (props) => {

    const {children} = props;

    const lineRef = useRef(null);
    const lineBoxRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);

    useEffect(() => {
        setLineWidth(lineBoxRef.current?.childNodes?.length * CONTENT_WIDTH);
    }, [])

    useEffect(() => {
        if (lineWidth <= 0) return;

        const domObserver = new IntersectionObserver(e => {
            e.forEach(line => {
                if (line.isIntersecting) line.target.style.width = `${lineWidth}px`;
                else line.target.style.width = "0px";
            })
        });
        domObserver.observe(lineRef.current);
    }, [lineWidth])

    return (
        <CareerHistoryContainer>
            {/* DirectionLineBox 화살표를 중앙 정렬 하면서 첫 시작 왼쪽에서 오른쪽으로 화살표 애니메이션을 위한 박스 */}
            <DirectionLineBox width={lineWidth}>
                <DirectionLine ref={lineRef}/>
            </DirectionLineBox>
            <DirectionLineContentBox ref={lineBoxRef}>
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

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #747bff;
`

const DirectionLineBox = styled.div`
  position: relative;

  width: ${props => props.width}px;
  height: 100%;

  background-color: coral;
`

const DirectionLine = styled.div`
  position: absolute;
  height: 10px;
  background-color: blue;
  border-radius: 100px;

  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;

  transition: width 4s ease;

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
