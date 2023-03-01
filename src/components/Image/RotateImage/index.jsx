import React, {createContext, useContext, useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";

const RotateImageContext = createContext();

const RotateImage = (props) => {
    const {children} = props;

    const [open, setOpen] = useState(false);

    const parent = useRef();

    return (
        <RotateImageContext.Provider value={{open, setOpen, parent}}>
            <ImageContentBox ref={parent}>
                {children}
            </ImageContentBox>
        </RotateImageContext.Provider>
    )
}

const RotateImageContent = (props) => {
    const {open, setOpen, parent} = useContext(RotateImageContext);

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

  position: ${props => props.open ? "block" : "absolute"};

  outline: 4px solid ${props => props.color};
  border-radius: 10px;
  margin: 20px;

  max-width: ${props => props.width}px;
  height: auto;

  cursor: pointer;

  top: 50%;

  transform: ${props => props.open ? `rotate(${0}deg)` : `translateY(-50%) rotate(${props.index * 5}deg)`};

  &:active {
    transform: ${props => props.open ? `scale(0.98) rotate(${0}deg)` : `scale(0.98) translateY(-50%) rotate(${props.index * 5}deg)`};
  }
  
  transition: all ease-in-out 1s;
`