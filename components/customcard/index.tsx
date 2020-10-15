import React from 'react'
import { CardContent, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { CustomCard } from './styles'

interface CardCustomProps {
    title: string;
    subheader: string;
}

const Card: React.FC<CardCustomProps> = ({
    title,
    subheader,
    children,
}) => {
      
  return (
    <Grid container justify="center">
        <Grid item xs={11} sm={9} lg={6} xl={5}>
            <CustomCard>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography color="textSecondary" variant="body2" component="p">
                        {subheader}
                    </Typography>

                    {children}
        
                </CardContent>
            </CustomCard>
        </Grid>
    </Grid>
  )
}

export default Card;