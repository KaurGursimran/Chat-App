import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../context/Authprovider';
import { Link } from 'react-router-dom';

function Login() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post('/api/user/login', userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          alert('Signup successful');
        }
        localStorage.setItem('ChatApp', JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          alert('Error :' + error.response.data.error);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 border border-white px-6 py-2 rounded-md w-96"
        >
          <h1 className="text-2xl text-center">
            Chat <span className="text-green-500 font-semibold">App</span>
          </h1>
          <h2 className="text-xl text-white font-bold">Login</h2>
          <br />
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register('email', { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-500 text-sm font-semibold">
              This field is required
            </span>
          )}

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register('password', { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-500 text-sm font-semibold">
              This field is required
            </span>
          )}

          <div className="flex justify-between">
            <p>
              New User?
              <Link to="/signup" className="text-blue-500 underline cursor-pointer ml-1">
                Signup
              </Link>
            </p>
            <input
              type="submit"
              value="Login"
              className="text-white bg-green-500 px-2 py-1 rounded-lg cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
