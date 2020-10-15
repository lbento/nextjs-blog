import Link from 'next/link';
import React from 'react';
import { HeaderRow, MenuItens, Image, GridHeader } from './styles';
import Hidden from '@material-ui/core/Hidden';

const Header: React.FC<any> = () => {
    const menuOptions = [
        {
            name: 'Página Inicial',
            link: '/'

        },
        {
            name: 'Mapa das Estações',
            link: '/'

        },
        {
            name: 'Funcionamento',
            link: '/'

        },
        {
            name: 'Conheça o Bike Sampa',
            link: '/'

        },
        {
            name: 'Como podemos te ajudar?',
            link: '/'

        },
        {
            name: 'Planos',
            link: '/'

        },
        {
            name: 'Fale com a gente',
            link: '/'

        },
    ];
    return (
        <>
            <HeaderRow position="relative">
                <GridHeader container alignItems="flex-end">
                    <GridHeader item xs={2}>
                        <Link href='/'>
                            <a><Image src='/images/logo.png'></Image></a>
                        </Link>
                    </GridHeader>
                    
                    <GridHeader item xs={10} align={"right"}>
                        <Hidden mdDown>
                            {menuOptions.map(({ name, link }) => (
                                <Link href={link}><MenuItens>{name}</MenuItens></Link>
                            ))}
                        </Hidden>
                    </GridHeader>
                    
                </GridHeader>
            </HeaderRow>
        </>
    );
}

export default Header;