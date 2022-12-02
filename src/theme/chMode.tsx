import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { MdModeNight, MdLightMode } from "react-icons/md";
import { themeState } from '../atom';
import * as S from "./style"

function ChModeBtn() {
    const [isDark, setIsDark] = useRecoilState(themeState);
    const handleTheme = () => {
        setIsDark(!isDark)
    }
    return (
        <S.Wrap>
            <S.ToggleBtnLight onClick={handleTheme} isActive={isDark}>
                <MdLightMode size="20px" />
            </S.ToggleBtnLight>
            <S.ToggleBtnDark onClick={handleTheme} isActive={isDark}>
                <MdModeNight size="20px" />
            </S.ToggleBtnDark>
        </S.Wrap>
    );
}

export default ChModeBtn
