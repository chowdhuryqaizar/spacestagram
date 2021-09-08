import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
    }),
);


interface ImageCardProps{
    url: string;
    title: string;
    explanation: string;
    date: string;
}

export default function ImageCard({title, url, explanation, date}:ImageCardProps) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={title}
                subheader={date}
            />
            <CardMedia
                className={classes.media}
                image={url}
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {explanation}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}