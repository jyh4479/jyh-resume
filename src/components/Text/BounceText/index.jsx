import React, {useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import {Text} from "../style"

const BounceText = React.forwardRef((props, ref) => {

    const {children, size, color = "#000000"} = props;

    return (
        <Text ref={ref} {...props}>
            {
                children
                    .split('', -1)
                    .map((char, index) =>
                        char !== ' '
                            ?
                            <BounceCharacter key={char + index} delay={index * 40}>
                                {char}
                            </BounceCharacter>
                            :
                            <BounceCharacter key={char + index} delay={index * 40}>
                                &nbsp;
                            </BounceCharacter>
                    )
            }
        </Text>
    )
});

export default BounceText;

const BounceCharacter = styled.span`
  display: inline-block;

  //@keyframes wave {
  //  0% {
  //    transform: translateY(0px);
  //  }
  //  50% {
  //    transform: translateY(-40px);
  //  }
  //  100% {
  //    transform: translateY(0px);
  //  }
  //}

  @keyframes shake {
    0% {
      transform: rotate(0deg)
    }
    25% {
      transform: rotate(-15deg)
    }
    50% {
      transform: rotate(0deg)
    }
    75% {
      transform: rotate(15deg)
    }
    100% {
      transform: rotate(0deg)
    }
  }

  animation: shake 1s linear infinite;
  animation-delay: ${props => props.delay}ms;
`