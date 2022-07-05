import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';

const PostsPage: React.FC = () => (
  <Layout>
    <SEO title="Posts" />
    <Posts />
  </Layout>
);

export default PostsPage;
