import React from 'react';
import Box from '@material-ui/core/Box';
import { Link as GatsbyLink } from 'gatsby';

const Home = (props) => {
  return (
    <Box>
      <GatsbyLink to="/faq">FAQ</GatsbyLink>
    </Box>
  );
};

export default Home;
