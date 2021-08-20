import React from 'react';

// Components
import FaqAccordion from '../../components/faqAccordion';

const SliceZone = ({ sliceData }) => {
  const sliceComponents = {
    component: null,
    otherComponent: null,
    faq: FaqAccordion,
  };

  const sliceZoneContent = sliceData.map((slice, i) => {
    const SliceComponent = sliceComponents[slice.slice_type];
    if (!SliceComponent) return null;
    return <SliceComponent {...slice} key={i} />;
  });

  return <>{sliceZoneContent}</>;
};

export default SliceZone;
