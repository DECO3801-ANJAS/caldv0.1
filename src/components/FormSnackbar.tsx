import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react';
import IFormSnackbarProps from '../interfaces/props/FormSnackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


// Function to return snack bar for form success/fail message
// Input : 
//        message, string
//        state, boolean
//        error, boolean
//        setOpen, React.useState() function
// return JSX element
export default function FormSnackbar({ message, state, error, setOpen }: IFormSnackbarProps) {

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar open={state} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}