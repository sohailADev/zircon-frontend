import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Container } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddBoxIcon from '@material-ui/icons/AddBox';

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    topbarcolors: {
        backgroundColor: "white",
        color: "black"
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <AppBar className={classes.topbarcolors} position="static">
                <Container >
                    <Toolbar >

                        <Typography variant="h6" className={classes.title}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <img src={process.env.PUBLIC_URL + '/logo_png.png'} alt='' />
                            </IconButton>

                        </Typography>
                        <ul className="Navigation">
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <HomeIcon />
                            </IconButton>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <SendIcon className="send_icon" />
                            </IconButton>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <AddBoxIcon />
                            </IconButton>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <FavoriteBorderIcon />
                            </IconButton>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/user.jpg'} />
                            </IconButton>
                            {/* <li><Link to="/posts">All Post</Link></li>
                            <li><Link to="/roasts">Roasts</Link></li>
                            <li><Link to="/boasts">Boasts</Link></li>
                            <li><Link to="/popular">Most Popular</Link></li>
                            <li><Link to="/createpost">Create Post</Link></li> */}

                        </ul>


                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
