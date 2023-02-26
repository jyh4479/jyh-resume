import React, {useEffect, useRef} from 'react';
import styled from "@emotion/styled";

const FlyingComponentBox = (props) => {

    const {children, fromDirection = 'left', move = 0} = props;

    const boxRef = useRef();

    useEffect(() => {
        const domObserver = new IntersectionObserver(e => {
            e.forEach(box => {
                if (box.isIntersecting) box.target.style.transform = 'translateX(0%)';
                else box.target.style.transform = `translateX(${fromDirection === 'left' ? -move : move}%)`;
            })
        });
        domObserver.observe(boxRef.current);
    }, [])

    return (
        <BoxLayout ref={boxRef} fromDirection={fromDirection} move={move}>
            {children}
        </BoxLayout>
    )
}

export default FlyingComponentBox;

const BoxLayout = styled.div`
  display: flex;
  flex-direction: column;

  transform: translateX(${props => `${props.fromDirection === 'left' ? -props.move : props.move}%`});
  transition: all 1s ease-in;
`