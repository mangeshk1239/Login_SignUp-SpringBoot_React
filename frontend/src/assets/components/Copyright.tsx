import * as MUI from '@mui/material';

export default function Copyright(props: any): JSX.Element {
    return (
        <MUI.Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <MUI.Link color="inherit" href="https://mui.com/">
                Your Website
            </MUI.Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </MUI.Typography>
    );
}