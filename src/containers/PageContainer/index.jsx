import React from 'react';
import styled from "@emotion/styled";
import {ToggleButton} from "@/components";
import {useRecoilState} from "recoil";
import {themeState} from "@/stores/Theme/index.js";
import {DarkTheme} from "@/constants/themes/DarkTheme.js";
import {LightTheme} from "@/constants/themes/LightTheme.js";

const PageContainer = (props) => {

    const {children} = props;
    const [theme, setTheme] = useRecoilState(themeState);

    const onChangeTheme = (isTrue) => {
        isTrue ? setTheme(new DarkTheme()) : setTheme(new LightTheme());
    }

    return (
        <BackGround color={theme.backGround}>
            <ToggleButton onClick={onChangeTheme}/>
            {children}
        </BackGround>
    )
}

export default PageContainer;

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color}
`