import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// Components
import SliceZone from '../../components/sliceZone';

// Data
import data from '../../data/accordionData';

const FaqPage = (props) => {
  const { title, body } = data;

  return (
    <Container>
      <Typography variant="h1">{title}</Typography>
      <SliceZone sliceData={body} />
    </Container>
  );
};

export default FaqPage;
