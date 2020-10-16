import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react';
import { CustomButton } from './styles'

const CustomDialog: React.FC<any> = ({
    open,
    title,
    messagem,
    handleClose
}) => {

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText >
                       {messagem}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <CustomButton onClick={handleClose} fontcolor={'#ff5900'}>
                        Okay
                    </CustomButton>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CustomDialog;