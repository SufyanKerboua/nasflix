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
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import logo from 'assets/logo.jpg';
import { useStyles } from './style';

import { useSelector } from 'react-redux';
import { selectUser } from 'state/selectors';

function Header({ showFullNavBar = false }) {
    const classes = useStyles();
    // const userState = useSelector(selectUser);
    // const user = userState.data;

    return (
        <>
            <AppBar position="relative" color="solidDark" enableColorOnDark>
                <Toolbar>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={24}
                    >
                        <Grid item>
                            <Link to="/">
                                <CardMedia
                                    className={classes.imgLogo}
                                    component="img"
                                    image={logo}
                                    title="img title"
                                />
                            </Link>
                        </Grid>
                        <Grid item>
                            {showFullNavBar ? (
                                <TextField
                                    // error
                                    margin="normal"
                                    variant="filled"
                                    fullWidth
                                    id="search"
                                    label="search"
                                    name="search"
                                    autoComplete="search"
                                    autoFocus
                                    color="primary"
                                    InputProps={{
                                        endAdornment: (
                                            <SearchIcon name={'search'} />
                                        ),
                                        style: {
                                            color: '#fff',
                                            // fontSize: 22,
                                        },
                                    }}
                                />
                            ) : null}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
