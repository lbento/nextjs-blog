import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const FooterRow = styled.footer`
    margin-top: 60px;
    background-color: #ff5900;
`;

export const MenuRow = styled(Grid)`
    min-height: 140px;
    padding: 30px 8%;
`;

export const MenuBaixar = styled(Grid)`
    min-height: 185px;
    padding: 30px 8%;
    background-color: #2E2E2E;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
`;

export const Image = styled.img`
    width: auto;
    height: auto;
    min-width: ${props => props.width}px;
    min-height: ${props => props.height}px;
    margin-top: 10px;
    display: initial;

    @media(max-width: 599px) {
        margin-bottom: 20px;
    }
`;

export const MenuItens = styled.a`
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    margin-top: 4px;
`;

export const ContainerLojas = styled.div`
    a:first-child {
        margin-right: 15px;
    }
    a:not(:first-child) {
        margin-left: 5px;
    }

    @media(max-width: 599px) {
        margin-bottom: 20px;
    }
`;

export const Title = styled.div`
    margin-bottom: 15px;
`;
