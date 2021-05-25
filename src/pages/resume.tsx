import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Experience from 'components/Experience';
import Education from 'components/Education';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <HeroBanner />
    <Experience />
    <hr />
    <Education />
  </Layout>
);

export default ResumePage;
