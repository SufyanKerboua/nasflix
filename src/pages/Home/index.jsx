import React from 'react';
import { Typography, Grid, Box, Container, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import MovieCard from 'components/MovieCard';
import SideDrawer from 'components/SideDrawer';
import { useStyles } from './style';
import FolderCard from 'components/FolderCard';

const movies = [
    'Disney',
    'Mr Robot',
    'La ligue des Justiciers : Guerre',
    'Joker (2019)',
    "Zack Snyder's Justice League (2021)",
    'Avengers: infinity war (2018)',
    'Les gardiens de la galaxie (2014)',
    'Spider-man: into the spider-Verse (2018)',
];

const directories = [
    'Invincible',
    'And just like that',
    'KAAMELOTT',
    'La flamme',
    'Orelsan Documentaire',
    'Universe - Marvel',
    'Universe - DC',
    'Invincible-2',
    'And just like that-2',
    'KAAMELOTT-2',
    'La flamme-2',
    'Orelsan Documentaire-2',
    'Universe - Marvel-2',
];

function Home() {
    const classes = useStyles();
    const drawerWidth = 240;
    return (
        <Box
            className={classes.homeContainer}
            minHeight="100vh"
            display="flex"
            flexDirection="column"
        >
            <Header showFullNavBar={true} />
            <SideDrawer drawerWidth={drawerWidth} />
            <Container
                className={classes.homeContainer}
                maxWidth="xl"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    marginRight: '0px',
                }}
            >
                <Typography gutterBottom>Movies</Typography>
                <Grid
                    className={classes.movieContainer}
                    container
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={8}
                >
                    {movies.map((movie) => {
                        return (
                            <Grid item key={movie}>
                                <Link to="/player">
                                    <MovieCard
                                        key={`movie-card-${movie}`}
                                        title={movie}
                                    />
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
                <Typography gutterBottom>Directories</Typography>

                <Grid
                    // className={classes.homeContainer}
                    container
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={8}
                >
                    {directories.map((directory) => {
                        return (
                            <Grid item key={directory}>
                                <Link to="/player">
                                    <FolderCard
                                        key={`directory-card-${directory}`}
                                        title={directory}
                                    />
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}

export default Home;
