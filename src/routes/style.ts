import styled from "styled-components";
import { Link} from 'react-router-dom';

export const GoBack = styled(Link)`
    position: absolute;
    top: 10px;
`;

export const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
    position: relative;
    bottom: -30px;
`;

export const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-self: center;
`;

export const CoinsList = styled.ul``;

export const Coin = styled.li`
    background-color: ${props => props.theme.liBgColor};
    color: ${props => props.theme.textColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a{
        padding: 20px;
        transition: color 0.2s ease-in;
        display: flex;
        align-items: center;
    }
    &:hover{
        a{
            color: ${props => props.theme.accentColor};
        }
    }
`;

export const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`;

export const Loader = styled.span`  
    text-align: center;
    display: block;
`;

export const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

export const OverView = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.detailBgColor};
    padding: 10px 20px;
    border-radius: 10px;
`;

export const OverViewItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OverViewItemFirst = styled.span`   
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const OverViewItemSecond = styled.span`
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0;
`;

export const Description = styled.p`
    margin: 20px 0px;
`;

export const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin: 25px 0px;
    gap: 10px;
`;

export const Tab = styled.span<{isActive: boolean}>`
    background-color: ${props => props.theme.detailBgColor};
    padding:7px 8px;
    text-align: center;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 400;
    transition: color 0.3s ease-in-out;
    color: ${(props) => 
        props.isActive?  props.theme.accentColor : props.theme.textColor
    };
    a {
        display: block;
        text-decoration: none;
    }
`;

export const themeBtn = styled.div` 
    position: absolute;
    top: 0px;
    right: 0;
`;