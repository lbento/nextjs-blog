import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

interface CardCustomProps {
    title: string;
    subheader: string;
}

const CustomCard: React.FC<CardCustomProps> = ({
    title,
    subheader,
    children,
}) => {
      
  return (
    <Grid container justify="center">
        <Grid item xs={11} sm={9} lg={6} xl={5}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography color="textSecondary" variant="body2" component="p">
                        {subheader}
                    </Typography>

                    {children}
        
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}

export default CustomCard;