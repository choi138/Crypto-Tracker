import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { MdModeNight, MdLightMode } from "react-icons/md";
import { themeState } from '../atom';

const ToggleBtn = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? '#fafafa' : 'transparent')};
  transition: 0.3s ease-in-out all;
  border: 0;
  display: flex;
  align-items: center;
`;

const Wrap = styled.div`
    position: absolute;
    right: 20px;
  display: flex;
  height: 40px;
  border: solid ${(props) => props.theme.accentColor} 3px;
  border-radius: 17px;
  color: ${(props) => props.theme.accentColor};
  width: fit-content;
  overflow: hidden;
`;

function ChModeBtn() {
    const [isDark, setIsDark] = useRecoilState(themeState);
    const toggleDark = () => setIsDark(true);
    const toggleLight = () => setIsDark(false);
    return (
        <Wrap>
            <ToggleBtn onClick={toggleLight} isActive={!isDark}>
                <MdLightMode size="25px" />
            </ToggleBtn>
            <ToggleBtn onClick={toggleDark} isActive={isDark}>
                <MdModeNight size="25px" />
            </ToggleBtn>
        </Wrap>
    );
}

export default ChModeBtn
