import Link from 'next/link';
import React, { useState } from 'react';
import { HeaderRow, MenuItens, Image, GridHeader, CustomDrawer, CustomButton } from './styles';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { List, ListItem } from '@material-ui/core';

const Header: React.FC<any> = () => {

    const [open, setState] = useState(false);

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
      ) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
    
        setState(open);
      };

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
            <HeaderRow position="relative" background={"#ff5900"}>

                <GridHeader container alignItems="flex-end">
                    <GridHeader item xs={2}>
                        <Link href='/'>
                            <a><Image src='/images/logo.png'></Image></a>
                        </Link>
                    </GridHeader>
                    
                    <GridHeader item xs={10} align={"right"}>
                        <Hidden mdDown>
                            <GridHeader item absoluteRow={true}>
                                <Link href="/signup"><CustomButton background={"#004990"} fontcolor={"#fff"}>Login</CustomButton></Link>
                                <Link href="/signup"><CustomButton background={"#004990"} fontcolor={"#fff"}>Cadastre-se</CustomButton></Link>
                            </GridHeader>
                            <GridHeader item>
                                {menuOptions.map(({ name, link }, index) => (
                                    <Link href={link} key={index}><MenuItens>{name}</MenuItens></Link>
                                ))}
                            </GridHeader>
                        </Hidden>
                        <Hidden lgUp>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={toggleDrawer(true)}
                                >
                                <MenuIcon fontSize="large" />
                            </IconButton>
                            <CustomDrawer background={"#ff5900"} fontcolor={"#fff"} anchor={'right'} open={open} onClose={toggleDrawer(false)}>
                                <List>
                                    {menuOptions.map(({ name, link }, index) => (
                                        <Link href={link} key={index}><ListItem button>{name}</ListItem></Link>
                                    ))}
                                    <Link href="/signup"><ListItem button>Login</ListItem></Link>
                                    <Link href="/signup"><ListItem button>Cadastre-se</ListItem></Link>
                                </List>
                            </CustomDrawer>
                        </Hidden>
                    </GridHeader>
                </GridHeader>
            </HeaderRow>
        </>
    );
}

export default Header;

