import React, {createContext, useContext, useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";

const RotateImageContext = createContext();

const RotateImage = (props) => {
    const {children, direction = "down"} = props;

    const [open, setOpen] = useState(false);

    const parent = useRef();

    return (
        <RotateImageContext.Provider value={{open, setOpen, parent, direction}}>
            <ImageContentBox ref={parent}>
                {children}
            </ImageContentBox>
        </RotateImageContext.Provider>
    )
}

const RotateImageContent = (props) => {
    const {open, setOpen, parent, direction} = useContext(RotateImageContext);

    const [index, setIndex] = useState(null);

    const child = useRef();

    useEffect(() => {
        const childNodes = parent.current.childNodes;
        const index = Array.prototype.indexOf.call(childNodes, child.current);
        setIndex(index);
    }, [])

    return (
        <ImageContent
            ref={child}
            index={index}
            open={open}
            direction={direction}
            onClick={() => setOpen(prev => !prev)}
            {...props}/>
    )
}

RotateImage.Content = RotateImageContent;

//TODO: Animation 수정하기
export default RotateImage;

const ImageContentBox = styled.div`
`

const ImageContent = styled.img`

  position: absolute;

  outline: 4px solid ${props => props.color};
  border-radius: 10px;
  margin: 20px;

  max-width: ${props => props.width}px;
  height: auto;

  cursor: pointer;

  top: 50%;

  transform: ${props => props.open ? `translateY(${(parseInt(props.index / 2) * (props.direction === "up" ? -120 : 120)) - 50}%) translateX(${((props.index + 1) % 2) * 110}%) rotate(${0}deg)` : `translateY(-50%) rotate(${props.index * 5}deg)`};

  &:active {
    transform: ${props => props.open ? `translateY(${(parseInt(props.index / 2) * (props.direction === "up" ? -120 : 120)) - 50}%) translateX(${((props.index + 1) % 2) * 110}%) rotate(${0}deg)` : `translateY(-50%) rotate(${props.index * 5}deg)`};
  }

  transition: transform ease-in-out 0.5s;
  
  user-select: none;
`