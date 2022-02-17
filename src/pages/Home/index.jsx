import React from 'react';
import {
    Typography,
    AppBar,
    Button,
    Card,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        backgroundColor: '#777777',
        padding: 20,
    },
    cardGrid: {
        padding: '20px 0',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    CardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#777777',
        padding: '50px 0',
    },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Home() {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">Photo Albulm</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Photo Albulm
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="img title"
                                    />
                                    <CardContent
                                        className={classes.CardContent}
                                    >
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use
                                            this setion to describe the content.
                                        </Typography>
                                        <Button
                                            size="small"
                                            color="primary"
                                            variant="contained"
                                        >
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="text">
                    Something here to give to a footer
                </Typography>
            </footer>
        </>
    );
}

export default Home;
