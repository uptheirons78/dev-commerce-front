import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Auth Method
import { signup } from '../auth/index';

// Components
import Layout from '../core/Layout';

const Signup = () => {
  // Initial State
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  });

  const { name, email, password, success, error } = values;

  // handleChange Method
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  // clickSubmit Method
  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then(data => {
      if (data.errors) {
        setValues({ ...values, error: data.errors[0].msg, success: false });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true
        });
      }
    });
  };

  // Form Component
  const SignUpForm = () => (
    <form>
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input onChange={handleChange('name')} type='text' className='form-control' value={name} />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Email</label>
        <input onChange={handleChange('email')} type='email' className='form-control' value={email} />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Password</label>
        <input onChange={handleChange('password')} type='password' className='form-control' value={password} />
      </div>
      <button onClick={clickSubmit} className='btn btn-primary'>
        Submit
      </button>
    </form>
  );

  const showError = () => (
    <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className='alert alert-info' style={{ display: success ? '' : 'none' }}>
      New account is created. Please <Link to='/signin'>Sign In</Link>
    </div>
  );

  return (
    <Layout
      title='Sign Up Page'
      description='Sign Up: Node React Ecommerce Application'
      className='container col-md-8 offset-md-2'
    >
      {showSuccess()}
      {showError()}
      {SignUpForm()}
    </Layout>
  );
};

export default Signup;
