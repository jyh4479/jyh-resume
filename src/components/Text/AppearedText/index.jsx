import React, {useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import {Text} from "../style"

const AppearedText = (props) => {

    const {children, direction = 'left', size, color} = props;

    const textRef = useRef();

    useEffect(() => {
        const domObserver = new IntersectionObserver(e => {
            e.forEach(text => {
                if (text.isIntersecting) text.target.style.opacity = 1;
                else text.target.style.opacity = 0;
            })
        });
        domObserver.observe(textRef.current);
    }, [])

    return <AppearedTextStyle ref={textRef}>{children}</AppearedTextStyle>
}

export default AppearedText;

const AppearedTextStyle = styled(Text)`
  opacity: 0;
  transition: opacity 3s ease-in;
`