import React from 'react';

import VerticalNav1 from '../components/vertical-navs/VerticalNav1';
import Testimonials4 from '../components/testimonials/Testimonials4';
import Footer3 from '../components/footers/Footer3';
import Header from '../components/headers/Header3';

const meta = {};

export default function Index() {
  return (
    <React.Fragment>
      <VerticalNav1
        content={null}
        bucketMain={[
          <Header content={null} />,

          <Testimonials4 content={null} />,

          <Footer3 content={null} />, ,
        ]}
      />
    </React.Fragment>
  );
}

