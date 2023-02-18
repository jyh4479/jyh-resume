import React, {useState} from 'react';
import styled from "@emotion/styled";
import Sun from "@/assets/svg/sun.svg";
import Moon from "@/assets/svg/moon.svg";

const ToggleButton = (props) => {

    const {color, onClick = isTrue => null} = props;

    const [isTrue, setIsTrue] = useState(false);

    const check = (e) => {
        setIsTrue(prev => {
            onClick(!prev);
            return !prev;
        });
    }

    return (
        <ButtonBox color={color} onClick={check}>
            <ButtonBllBox checked={isTrue}>
                <ButtonImage src={isTrue ? Moon : Sun}/>
                {/*<ButtonBall/>*/}
            </ButtonBllBox>
        </ButtonBox>
    )
}

export default ToggleButton;

const ButtonBox = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 80px;
  border: 3px solid ${props => props.color ? props.color : "#888888"};
  cursor: pointer;

  &:active > div > div {
    transform: scale(0.95);
  }
  
  z-index: 9999;
`

const ButtonBllBox = styled.div`
  position: absolute;
  top: 50%;
  transform: ${props => props.checked ? "translate(95%, -50%)" : "translate(0%, -50%)"};
  transition: 0.5s ease transform;
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonImage = styled.img`
  user-select: none;
`

const ButtonBall = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 100px;
  background-color: #646cff;
`