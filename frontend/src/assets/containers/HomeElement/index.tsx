import * as MUI from '@mui/material';

export default function HomeElement(): JSX.Element {
    return (
        <MUI.Box sx={{ flexGrow: 1 }}>
            <MUI.AppBar position="static">
                <MUI.Toolbar>
                    <MUI.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome
                    </MUI.Typography>
                    <MUI.Button variant="contained" color="warning">Logout</MUI.Button>
                </MUI.Toolbar>
            </MUI.AppBar>
        </MUI.Box>
    );
}