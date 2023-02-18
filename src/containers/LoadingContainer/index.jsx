import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import Loading from "@/components/Loading/index.jsx";
import {useRecoilValue} from "recoil";
import {themeState} from "@/stores/Theme/index.js";
import {useInterval} from "@/hooks/useInterval.js";

const LoadingContainer = (props) => {

    const {children} = props;

    const [loading, setLoading] = useState(true);
    const [percent, setPercent] = useState(0);
    const [delay, setDelay] = useState(35);
    const theme = useRecoilValue(themeState);

    useInterval(() => {
        setPercent(prev => prev + 1);
    }, delay)

    useEffect(() => {
        if (percent === 100) setDelay(null);
    }, [percent])

    return (
        loading
            ?
            <BlurContainer opacity={(100 - percent) / 100} display={percent === 100}>
                <Loading percent={percent} color={theme.button}/>
            </BlurContainer>
            :
            children
    )
}

export default LoadingContainer;

const BlurContainer = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100vw;
  height: 100vh;

  display: ${props => props.display ? "none" : "flex"};
  align-items: center;
  justify-content: center;

  background-color: transparent;

  //filter:blur(4px);
  opacity: ${props => props.opacity};
  background-color: #FFFFFF;
`