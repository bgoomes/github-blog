import styled from "styled-components";

export const UserCardContainer = styled.div`
    background: ${props => props.theme['primaryShape']};
    width: 100%;
    padding: 32px 40px;
    display: flex;
    align-items: center;
    gap: 32px;
    border-radius: 10px;

    margin-top: -80px;

    img{
        width: 148px;
        height: 148px;
        border: 4px solid ${props => props.theme['brand']};
        border-radius: 100px;
    }
`