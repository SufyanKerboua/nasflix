import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    Grid,
    Box,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
} from '@mui/material';

import colors from 'utils/styles/colors';
import { useStyles } from './style';

function MovieCard({ title }) {
    const classes = useStyles();
    return (
        <Card
            sx={{
                width: 150,
                height: 300,
                backgroundColor: colors.backgroundSolidDark,
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="190"
                    // width="180"
                    image="https://source.unsplash.com/random"
                    alt="green iguana"
                />
                <CardContent className={classes.cardContainer}>
                    <Typography
                        className={`
                            ${classes.cardTitle}
                        `}
                        gutterBottom
                        component="div"
                        align="center"
                    >
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

MovieCard.propTypes = {};

export default MovieCard;
