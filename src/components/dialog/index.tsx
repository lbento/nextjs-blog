import { Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import React from 'react';
import { CustomButton } from './styles'

const CustomDialog: React.FC<any> = ({
    open,
    messagem,
    handleClose
}) => {

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
            >
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