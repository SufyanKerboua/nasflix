import React from 'react';
import { Link } from 'react-router-dom';
import {
    Typography,
    Button,
    AppBar,
    CardMedia,
    Grid,
    Toolbar,
    Container,
    TextField,
    IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from '@mui/icons-material';

import logo from 'assets/logo.png';
import { useStyles } from './style';
import colors from 'utils/styles/colors';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'state/selectors';

import { selectDrawer } from 'state/selectors';
import { toggleDrawer } from 'state/drawer/drawerReducer';

function Header({ showFullNavBar = false }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDrawerToggle = () => {
        console.log('here');
        dispatch(toggleDrawer());
    };
    // const userState = useSelector(selectUser);
    // const user = userState.data;
    console.log(classes.customInputLabelTextField);
    return (
        <>
            <AppBar position="fixed" color="solidDark" enableColorOnDark>
                <Toolbar sx={{ height: 64 }}>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs>
                            {showFullNavBar ? (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        mr: 2,
                                        display: {
                                            xs: 'block',
                                            md: 'none',
                                        },
                                        color: colors.white,
                                    }}
                                >
                                    <Menu />
                                </IconButton>
                            ) : null}
                        </Grid>
                        <Grid item xs={6}>
                            <Link to="/">
                                <CardMedia
                                    sx={{
                                        width: 130,
                                    }}
                                    className={classes.imgLogo}
                                    component="img"
                                    image={logo}
                                    title="img title"
                                />
                            </Link>
                        </Grid>
                        <Grid item xs>
                            {showFullNavBar ? (
                                <>
                                    <TextField
                                        InputLabelProps={{
                                            style: { color: colors.grey },
                                        }}
                                        sx={{
                                            display: {
                                                xs: 'none',
                                                md: 'block',
                                            },
                                        }}
                                        variant="filled"
                                        // fullWidth
                                        id="search"
                                        label="search"
                                        name="search"
                                        autoComplete="search"
                                        color="primary"
                                        InputProps={{
                                            endAdornment: (
                                                <SearchIcon name={'search'} />
                                            ),
                                            style: {
                                                color: colors.white,
                                                backgroundColor:
                                                    colors.backgroundDark,
                                            },
                                        }}
                                    />
                                    <SearchIcon
                                        name={'search'}
                                        sx={{
                                            marginLeft: 'auto',
                                            display: {
                                                xs: 'block',
                                                md: 'none',
                                            },
                                            color: colors.white,
                                        }}
                                    />
                                </>
                            ) : null}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}

export default Header;
