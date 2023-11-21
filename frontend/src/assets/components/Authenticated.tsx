import { IProps } from "./interfaces";
import * as React from "react";
import { Navigate } from "react-router-dom";
import * as MUI from '@mui/material';

export default function Authenticated({ children }: IProps): JSX.Element {
    const [getLoggedIn, setLoggedIn] = React.useState<boolean | null>(null);

    React.useEffect(() => {
        isAuthenticated();
    }, []);

    if (getLoggedIn == null) return <MUI.CircularProgress />;
    if (getLoggedIn == false) return <Navigate to="/login" />;
    return <>{children}</>;

    async function isAuthenticated() {
        const response = await fetch("/api/user/get").then(response => response.json());
        if (response.success == false) setLoggedIn(false);
        else setLoggedIn(true);
    }
}