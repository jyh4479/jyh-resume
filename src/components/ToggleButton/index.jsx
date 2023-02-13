import React, {useState} from 'react';
import styled from "@emotion/styled";

const ToggleButton = (props) => {

    const {onClick = isTrue => null} = props;

    const [isTrue, setIsTrue] = useState(false);

    const check = (e) => {
        setIsTrue(e.target.checked);
        onClick(e.target.checked);
    }

    return (
        <ButtonBox>
            <InputBox type="checkbox" onClick={check}/>
            <ButtonBall checked={isTrue}/>
        </ButtonBox>
    )
}

export default ToggleButton;

const ButtonBox = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  border-radius: 80px;
  border: 3px solid #888888;
`

const ButtonBall = styled.div`
  position: absolute;
  top: 50%;
  transform: ${props => props.checked ? "translate(120%, -50%)" : "translate(5%, -50%)"};
  transition: 0.5s ease transform;
  width: 35px;
  height: 35px;
  border-radius: 100px;
  background-color: #646cff;
`

const InputBox = styled.input`
  position: absolute;
  width: 80px;
  height: 40px;
  border-radius: 80px;

  opacity: 0;
  z-index: 9999;
`