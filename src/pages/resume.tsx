import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Publications from 'components/Publications';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <HeroBanner />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Publications />
    <hr />
  </Layout>
);

export default ResumePage;
