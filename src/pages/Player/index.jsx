import React from 'react';
import ReactPlayer from 'react-player';
import Header from 'components/Header';
import { Grid, Box, Container } from '@mui/material';

import video from 'pages/../../public/data/5.mkv';
import { useStyles } from './style';

function Player() {
    const classes = useStyles();
    return (
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
                    justifyContent="center"
                    alignItems="center"
                    spacing={8}
                >
                    <Grid item>
                        <ReactPlayer url={video} controls />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Player;
