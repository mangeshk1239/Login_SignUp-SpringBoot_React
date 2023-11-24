import * as MUI from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <MUI.Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <MUI.Container maxWidth="md">
                <MUI.Grid container spacing={2}>
                    <MUI.Grid xs={6}>
                        <MUI.Typography variant="h1">
                            404
                        </MUI.Typography>
                        <MUI.Typography variant="h6">
                            The page you’re looking for doesn’t exist.
                        </MUI.Typography>
                        <MUI.Button onClick={() => navigate('/')} variant="contained">Back Home</MUI.Button>
                    </MUI.Grid>
                    <MUI.Grid xs={6}>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                            alt=""
                            width={500} height={250}
                        />
                    </MUI.Grid>
                </MUI.Grid>
            </MUI.Container>
        </MUI.Box>
    );
}