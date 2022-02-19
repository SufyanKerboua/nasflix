import React from 'react';
import { Typography, Grid, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import MovieCard from 'components/MovieCard';
import { useStyles } from './style';

const movies = [
    'Disney',
    'Mr Robot',
    'La ligue des Justiciers : Guerre',
    'Joker (2019)',
    "Zack Snyder's Justice League (2021)",
    'Avengers: infinity war (2018)',
    'Les gardiens de la galaxie (2014)',
    'Spider-man: into the spider-Verse (2018)',
    'Disney2',
    'Mr Robot2',
    'La ligue des Justiciers : Guerre2',
    'Joker (2019)2',
    "Zack Snyder's Justice League (2021)2",
    'Avengers: infinity war (2018)2',
    'Les gardiens de la galaxie (2014)2',
    'Spider-man: into the spider-Verse (2018)2',
];

function Home() {
    const classes = useStyles();
    return (
        <>
            <Box
                className={classes.homeContainer}
                minHeight="100vh"
                display="flex"
                flexDirection="column"
            >
                <Header showFullNavBar={true} />
                <Container className={classes.cardGrid} maxWidth="xl">
                    <Grid
                        className={classes.homeContainer}
                        container
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={8}
                    >
                        {movies.map((movie) => {
                            return (
                                <Grid
                                    item
                                    key={movie}
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    xl={2}
                                >
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
                </Container>
            </Box>
        </>
    );
}

export default Home;
