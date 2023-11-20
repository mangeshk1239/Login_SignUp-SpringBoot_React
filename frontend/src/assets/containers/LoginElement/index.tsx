import * as React from 'react';
import * as MUI from '@mui/material';
import * as Component from "../../components/components";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ILoginUser } from './interfaces';
import { useNavigate } from 'react-router-dom';

const defaultTheme = MUI.createTheme();

export default function LoginElement(): JSX.Element {
    const navigate = useNavigate();
    return (
        <MUI.ThemeProvider theme={defaultTheme}>
            <MUI.Grid container component="main" sx={{ height: '100vh' }}>
                <MUI.CssBaseline />

                <MUI.Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <MUI.Grid item xs={12} sm={8} md={5} component={MUI.Paper} elevation={6} square>
                    <MUI.Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <MUI.Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </MUI.Avatar>
                        <MUI.Typography component="h1" variant="h5">
                            Sign In
                        </MUI.Typography>
                        <MUI.Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <MUI.Grid container spacing={2}>
                                <MUI.Grid item xs={12}>
                                    <MUI.TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                </MUI.Grid>
                                <MUI.Grid item xs={12}>
                                    <MUI.TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </MUI.Grid>
                            </MUI.Grid>
                            <MUI.Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </MUI.Button>
                            <MUI.Grid container>
                                <MUI.Grid item xs>
                                    <MUI.Link href="/register" variant="body2">
                                        {"Don't have an account? Register here"}
                                    </MUI.Link>
                                </MUI.Grid>
                                <MUI.Grid item>
                                </MUI.Grid>
                            </MUI.Grid>
                            <Component.Copyright sx={{ mt: 5 }} />
                        </MUI.Box>
                    </MUI.Box>
                </MUI.Grid>


            </MUI.Grid>
        </MUI.ThemeProvider>
    )

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        try {
            const data = new FormData(event.currentTarget);
            const loginUserData: ILoginUser = {
                email: data.get('email'),
                password: data.get('password'),
            };

            const response = await fetch("/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginUserData)
            }).then(response => response.json());

            if (response.success) {
                navigate("/blogger/1");
            }

            console.log("response", response);
        } catch (error) {
            console.log("ERROR", error);
        }
    }
}