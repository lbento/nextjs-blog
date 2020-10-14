import Link from 'next/link';
import React from 'react';
import { GridRow, GridRight } from '../styles';
import { HeaderRow, MenuItens, Image } from './styles';

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
    ]
    return (
        <>
            <HeaderRow position="relative">
                <GridRow>
                    <Link href='/'>
                        <a><Image src='/images/logo.png'></Image></a>
                    </Link>
                </GridRow >
                <GridRow  theme={GridRight}>
                    {menuOptions.map(({ name, link }) => (
                        <Link href={link}><MenuItens>{name}</MenuItens></Link>
                    ))}
                </GridRow>
            </HeaderRow>
        </>
    );
}

export default Header;