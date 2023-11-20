import * as React from 'react';
import * as MUI from '@mui/material';
import * as Component from "../../components/components";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { IRegisterUser } from './interfaces';

const defaultTheme = MUI.createTheme();

export default function RegisterElement(): JSX.Element {

    return (
        <MUI.ThemeProvider theme={defaultTheme}>
            <MUI.Grid container component="main" sx={{ height: '100vh' }}>
                <MUI.CssBaseline />

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
                            Register as a Blogger
                        </MUI.Typography>
                        <MUI.Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <MUI.Grid container spacing={2}>
                                <MUI.Grid item xs={12} sm={6}>
                                    <MUI.TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </MUI.Grid>
                                <MUI.Grid item xs={12} sm={6}>
                                    <MUI.TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </MUI.Grid>
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
                                Register
                            </MUI.Button>
                            <MUI.Grid container>
                                <MUI.Grid item xs>
                                </MUI.Grid>
                                <MUI.Grid item>
                                    <MUI.Link href="/login" variant="body2">
                                        {"Already have an account? Sign in"}
                                    </MUI.Link>
                                </MUI.Grid>
                            </MUI.Grid>
                            <Component.Copyright sx={{ mt: 5 }} />
                        </MUI.Box>
                    </MUI.Box>
                </MUI.Grid>

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
            </MUI.Grid>
        </MUI.ThemeProvider>
    )

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        try {
            const data = new FormData(event.currentTarget);
            const registerUserData: IRegisterUser = {
                firstName: data.get('firstName'),
                lastName: data.get('lastName'),
                email: data.get('email'),
                password: data.get('password'),
            };

            console.log("userData", registerUserData);
            const response = await fetch("/api/user/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerUserData)
            }).then(response => response.json());
            
            console.log("response", response);
        } catch (error) {
            console.log("ERROR", error);
        }
    }
}