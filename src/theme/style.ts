import styled from 'styled-components';

export const ToggleBtnLight = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? '#fafafa' : 'transparent')};
  transition: 0.3s ease-in-out all;
  border: 0;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

export const ToggleBtnDark = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? 'transparent' : props.theme.accentColor)};
  transition: 0.3s ease-in-out all;
  border: 0;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

export const Wrap = styled.div`
    position: absolute;
    right: 20px;
  display: flex;
  height: 35px;
  border: solid ${(props) => props.theme.accentColor} 2px;
  border-radius: 17px;
  color: ${(props) => props.theme.accentColor};
  width: fit-content;
`;