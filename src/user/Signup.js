import React from 'react';
import { API } from '../config';

// Components
import Layout from '../core/Layout';

const Signup = () => {
  return (
    <Layout title='SignUp Page' description='Signup: Node React Ecommerce Application'>
      {API}
    </Layout>
  );
};

export default Signup;
