import React from 'react';
import { Card_, CardContent_, CardActions_, CardHeader_ } from './card.styles';

interface CardCustomProps {
    title: string;
    subheader: string;
}

const CardCustom: React.FC<CardCustomProps> = ({
    title,
    subheader,
    children,
}) => {
    return (
        <Card_>
            <CardHeader_ title={title} subheader={subheader} />
            <CardContent_>{children}</CardContent_>
        </Card_>
    );
};

export default CardCustom;