import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/auth/signup', data);
      alert('Signed up successfully!');
    } catch (err) {
      alert(err.response?.data?.message || 'Sign up failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign Up</h2>
      <input {...register('username')} placeholder="Username" required />
      <input {...register('password')} type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default SignUp;
