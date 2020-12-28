import React, { useEffect, useState } from "react";
import {
    makeStyles,
    Card,
    CardContent,
    Typography,
    Hidden,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 400,
        background: "linear-gradient(45deg, #2196F3 30%, #3F51B5 90%)",
        color: theme.palette.primary.contrastText,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justify: "center",
        marginBottom: 400,
        [theme.breakpoints.down("sm")]: {
            height: 250,
        },
    },
    header: {
        margin: 32,
        marginTop: 128,
        textAlign: "center",
    },
    card: {
        paddingLeft: 16,
        paddingRight: 16,
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            marginTop: 64,
        },
    },
    cardTitle: {
        marginTop: 16,
        marginBottom: 16,
        color: "#5F6368",
        textAlign: "center",
    },
    error: {
        marginTop: 16,
        marginBottom: 16,
        textAlign: "center",
    },
    form: {
        margin: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    links: {
        marginTop: 16,
    },
    link: {
        display: "block",
        marginTop: 8,
        textDecoration: "none",
    },
}));

function Register(props) {
    const classes = useStyles();
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        document.title = "Register | Paywall";
    }, []);

    return (
        <Grid container={true} className={classes.root}>
            <Hidden smDown={true}>
                <Grid item={true} className={classes.header} xs={12}>
                    <Typography variant="h3">Create your account</Typography>
                    <Typography variant="h5">
                        One step away from awesomeness
                    </Typography>
                </Grid>
            </Hidden>

            <Grid item={true} xs={12} md={3} className={classes.card}>
                <Card>
                    <CardContent>
                        <Hidden mdUp={true}>
                            <Typography
                                variant="h5"
                                className={classes.cardTitle}
                            >
                                Create your account
                            </Typography>
                        </Hidden>
                        {errorMessage && (
                            <Typography className={classes.error} color="error">
                                {errorMessage}
                            </Typography>
                        )}
                        <RegisterForm handleErrorMessage={setErrorMessage} />
                        <div className={classes.links}>
                            <Hidden mdUp={true}>
                                <Link className={classes.link} to="/login">
                                    Login
                                </Link>
                            </Hidden>
                            <Link
                                className={classes.link}
                                to="/forgot-password"
                            >
                                Recover Account
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Register;
