import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { MdModeNight, MdLightMode } from "react-icons/md";
import { themeState } from '../atom';

const ToggleBtnLight = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? props.theme.accentColor : 'transparent')};
  transition: 0.3s ease-in-out all;
  border: 0;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

const ToggleBtnDark = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? 'transparent' : props.theme.accentColor)};
  transition: 0.3s ease-in-out all;
  border: 0;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

const Wrap = styled.div`
    position: absolute;
    right: 20px;
  display: flex;
  height: 35px;
  border: solid ${(props) => props.theme.accentColor} 2px;
  border-radius: 17px;
  color: ${(props) => props.theme.accentColor};
  width: fit-content;
`;

function ChModeBtn() {
    const [isDark, setIsDark] = useRecoilState(themeState);
    const handleTheme = () => {
        setIsDark(!isDark)
    }
    return (
        <Wrap>
            <ToggleBtnDark onClick={handleTheme} isActive={isDark}>
                <MdLightMode size="20px" />
            </ToggleBtnDark>
            <ToggleBtnLight onClick={handleTheme} isActive={isDark}>
                <MdModeNight size="20px" />
            </ToggleBtnLight>
        </Wrap>
    );
}

export default ChModeBtn
