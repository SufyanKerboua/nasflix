import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from 'state/user/userReducer';
// import PropTypes from 'prop-types';
import {
    Typography,
    Button,
    AppBar,
    CardMedia,
    Grid,
    Toolbar,
    Container,
    TextField,
    FormControlLabel,
    Checkbox,
    Box,
    Divider,
} from '@mui/material';

import Header from 'components/Header';
import colors from 'utils/styles/colors';
import { useStyles } from './style';

function Login() {
    const classes = useStyles();
    const signInText = 'Sign In';
    const rememberText = 'Remember me';
    const login = 'Login';
    const password = 'password';

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser());
        const data = new FormData(event.currentTarget);
        console.log({
            login: data.get('login'),
            password: data.get('password'),
            rememberBox: data.get('rememberBox'),
        });
        navigate('/');
    };

    return (
        <>
            <div className={classes.loginContainer}>
                <Header />
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '80vh' }}
                >
                    <Grid item xs={3}>
                        <Container
                            className={classes.loginCard}
                            component="main"
                            maxWidth="xs"
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    className={classes.loginTitle}
                                    component="h1"
                                    variant="h4"
                                >
                                    {signInText}
                                </Typography>
                                <Box
                                    component="form"
                                    onSubmit={handleSubmit}
                                    noValidate
                                    sx={{ mt: 1 }}
                                >
                                    <TextField
                                        InputProps={{
                                            style: {
                                                color: colors.white,
                                                fontSize: 22,
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: colors.grey,
                                                fontSize: 22,
                                            },
                                        }}
                                        margin="normal"
                                        variant="filled"
                                        fullWidth
                                        id="login"
                                        label={login}
                                        name="login"
                                        autoComplete="login"
                                        autoFocus
                                        color="primary"
                                    />
                                    <TextField
                                        InputProps={{
                                            style: {
                                                color: colors.white,
                                                fontSize: 22,
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                color: colors.grey,
                                                fontSize: 22,
                                            },
                                        }}
                                        margin="normal"
                                        variant="filled"
                                        fullWidth
                                        id="password"
                                        label={password}
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        color="primary"
                                    />
                                    <FormControlLabel
                                        name="rememberBox"
                                        control={
                                            <Checkbox
                                                value="remember"
                                                color="primary"
                                            />
                                        }
                                        label={rememberText}
                                        sx={{ color: colors.grey }}
                                    />
                                    <hr className={classes.lineSeparator} />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{ mt: 3, mb: 5 }}
                                        color="primary"
                                    >
                                        {signInText}
                                    </Button>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

Login.propTypes = {};

export default Login;
