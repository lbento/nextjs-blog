import { Dialog, DialogContent } from '@material-ui/core';
import React from 'react';
import { CustomButton, CustomDialogActions } from './styles'

const CustomConfirmDialog: React.FC<any> = ({
    open,
    messagem,
    buttonText,
    handleClose
}) => {

    const handleListItemClick = (agreed: boolean) => {
        handleClose(agreed);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={() => handleListItemClick(false)}
            >
                <DialogContent>
                      {messagem}
                </DialogContent>
                <CustomDialogActions>
                    <CustomButton onClick={() => handleListItemClick(true)} background={'#EC7000'}>
                        {buttonText}
                    </CustomButton>
                </CustomDialogActions>
            </Dialog>
        </>
    );
}

export default CustomConfirmDialog;