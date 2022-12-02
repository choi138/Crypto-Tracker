import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${props => props.theme.priceBgColor};
    padding:20px;
    margin-bottom:50px;
    @media screen and (min-width: 1500px) {
        margin-bottom: 0px;
    };
    @media screen and (max-width: 1500px) and (min-width: 1000px) {
        margin-bottom: 0px;
    };
`;

export const PirceDataWrap = styled.div`
    z-index: 11;
    opacity: 1;
    display: flex;
    border-radius: 5px;
    background-color: ${props => props.theme.detailBgColor};
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 5px;
    align-items: flex-start;
`;

export const PriceDataTitle  = styled.h2<{data?:number}>`
    margin-bottom: 5px;
    color: ${(props) => typeof props.data === 'number' && props.data !== 0 ? props.data > 0 ? "#3EC70B" : "#DC3535" : null};
`;

export const AthDiv = styled.div`
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
`;
export const AthDate = styled.p`
    font-size: 12px;
    color: #fafafa;
    opacity: 0.6;
`;