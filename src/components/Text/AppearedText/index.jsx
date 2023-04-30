import React, {useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import {Text} from "../style"

const AppearedText = (props) => {

    const {children, size, color} = props;

    const textRef = useRef();

    useEffect(() => {
        const domObserver = new IntersectionObserver(e => {
            e.forEach(text => {
                if (text.isIntersecting) text.target.style.opacity = 1;
                // else text.target.style.opacity = 0;
            })
        });
        domObserver.observe(textRef.current);
    }, [])

    return <AppearedTextStyle ref={textRef} size={size} color={color}>{children}</AppearedTextStyle>
}

export default AppearedText;

const AppearedTextStyle = styled(Text)`
  opacity: 0;
  margin: 10px;
  transition: opacity 1s ease-in;
`