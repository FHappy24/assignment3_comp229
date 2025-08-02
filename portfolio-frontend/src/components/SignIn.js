// import React, { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const SignIn = () => {
//   const { register, handleSubmit } = useForm();
//   const { signin } = useContext(AuthContext);

//   const onSubmit = async (data) => {
//     try {
//       const res = await axios.post('http://localhost:5000/auth/signin', data);
//       signin(res.data.token);
//       alert('Signed in successfully!');
//     } catch (err) {
//       alert(err.response?.data?.message || 'Sign in failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h2>Sign In</h2>
//       <input {...register('username')} placeholder="Username" required />
//       <input {...register('password')} type="password" placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default SignIn;


import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const { signin } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:5000/auth/signin', data);
      signin(res.data.token);
      alert('Signed in successfully!');
    } catch (err) {
      alert(err.response?.data?.message || 'Sign in failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Welcome to Sign In Page</h1> {/* 👈 Add this line for testing */}
      <h2>Sign In</h2>
      <input {...register('username')} placeholder="Username" required />
      <input {...register('password')} type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default SignIn;
