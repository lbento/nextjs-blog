import React from 'react';
import RecebaNovidades from '../RecebaNovidades';
import { FooterRow, MenuBaixar, MenuRow } from './styles';

const Footer: React.FC<any> = () => {
    return (
        <>
            <FooterRow>
                <RecebaNovidades/>
                <MenuRow>
                    hahahaha
                </MenuRow>
                <MenuBaixar>
                    hehehe
                </MenuBaixar>
            </FooterRow>
        </>
    );
}

export default Footer;