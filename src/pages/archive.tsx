import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Archive from 'components/Archive';

const ArchivePage: React.FC = () => (
  <Layout>
    <SEO title="Archive" />
    <Archive />
  </Layout>
);

export default ArchivePage;
