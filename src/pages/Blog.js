import React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StoryCard from '../components/StoryCard';
import { blog } from '../info';

const Blog = ({ myRef }) => {
  const formatStories = () => {
    return blog.map(story => <StoryCard key={story.id} story={story}/>)
  }

  return (
    <section className="blog section" id="blog" ref={myRef}>
      <Container>
        <Typography variant="h2" component="h2" align="center">
          Blogs
        </Typography>
        <div className="stories-container">
          { formatStories() }
        </div>
      </Container>
  </section>
  );
}

// Blog.propTypes = {
//   : PropTypes.
// };

export default Blog;
