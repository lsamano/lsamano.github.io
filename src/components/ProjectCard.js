import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MyModal from './MyModal';

const useStyles = makeStyles(theme => ({
  span: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: "5px",
    margin: "5px"
  },
  cardMedia: {
    width:"100%"
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    maxWidth: "45%",
    margin: "20px"
  },
  mobileCard: {
    margin: "20px"
  }
}));

const ProjectCard = ({ title, subtitle, img_url, tags, shorthand, github, demo }) => {
  const { span, cardMedia, tagContainer, card, mobileCard } = useStyles();
  const matches = useMediaQuery('(min-width:850px)');

  const renderTags = () => (
    tags.map((tag, index) => (
      <span
        key={index}
        className={span}>
        {tag}
      </span>
    ))
  )

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={matches ? card : mobileCard}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
        component="img"
        src={img_url}
        alt="project image"
        className={cardMedia}
        />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {subtitle}
        </Typography>
        <div className={tagContainer}>
          {renderTags()}
        </div>
      </CardContent>
    </CardActionArea>
    <MyModal
      title={title}
      subtitle={subtitle}
      tags={tags}
      img_url={img_url}
      github_url={github}
      demo_url={demo}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
      />
  </Card>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img_url: PropTypes.string,
  tags: PropTypes.array,
  shorthand: PropTypes.string,
};

export default ProjectCard;
