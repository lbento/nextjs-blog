import { Grid } from '@material-ui/core';
import React from 'react';

const TextoContainer: React.FC<any> = ({children} : any) => {
  
    return (
        <>
            <Grid container justify="center">
                <Grid item xs={10} sm={10} lg={10} xl={10}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
}

export default TextoContainer;