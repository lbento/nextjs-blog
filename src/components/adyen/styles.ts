import styled from 'styled-components';

export const DivContainer = styled.div`
    .adyen-checkout__spinner {
        border: 3px solid ${props => props.background};
        border-top-color: transparent;
    }
`;