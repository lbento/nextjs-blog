
import React from 'react'
import { CardContent, Typography, CardActions, CardActionArea, Card } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { CustomCard, CustomContent } from './styles'
import { Block } from '@material-ui/icons';


interface CardCustomProps {
    title: string;
    descount?: string;
    value: string;
    message?: string;
}

const Cardc: React.FC<CardCustomProps> = ({
    title,
    descount,
    value,
    message,
    children,
}) => {
    return (
        <Grid item xs={12} sm={12} lg={4} xl={4}>
            <CustomCard >
                <CustomContent>
                    <div style={{ marginBottom: '15px' }}>
                        <Typography variant="h5" style={{ fontSize: '16px', fontWeight: 700 }} align="center">
                            {title}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h5" style={{ fontSize: '14px', fontWeight: 700 }} align="center">
                            {descount}
                        </Typography>
                    </div>
                    <div style={{ marginBottom: '5px', marginTop: '10px' }}>
                        <Typography variant="body2" style={{ fontSize: '32px', fontWeight: 700 }} align="center">
                            {value}
                        </Typography>
                    </div>
                    <div>
                        <Typography color="textSecondary" variant="body2" style={{ fontSize: '12px', fontWeight: 600 }} align="center">
                            {message}
                        </Typography>
                    </div>
                </CustomContent>
                <div>
                    {children}
                </div>
            </CustomCard>
        </Grid>
    )
}

export default Cardc;

// import React from 'react'
// import { CardContent, Typography, CardActions, CardActionArea  } from '@material-ui/core'
// import Grid from '@material-ui/core/Grid';
// import { CustomCard, CustomContent } from './styles'

// interface CardCustomProps {
//     title: string;
//     descount?: string;
//     value: string;
//     message?: string;
// }

// const Card: React.FC<CardCustomProps> = ({
//     title,
//     descount,
//     value,
//     message,
//     children,
// }) => {

//     return (
//         <Grid container>
//             <Grid item xs={4} sm={4} lg={4} xl={4}>
//                 <CustomCard >
//                 <CardActionArea >
//                     <CustomContent>
//                         <Typography variant="h5" component="h2">
//                             {title}
//                         </Typography>
//                         <Typography variant="h5" component="h4">
//                             {descount}
//                         </Typography>
//                         <Typography variant="body2" component="h1">
//                             {value}
//                         </Typography>
//                         <Typography color="textSecondary" variant="body2" component="p">
//                             {message}
//                         </Typography>
//                     </CustomContent>
//                 </CardActionArea>
//                     <CardActions >
//                         {children}
//                     </CardActions>
//                 </CustomCard>
//             </Grid>
//         </Grid>
//     )
// }

// export default Card;