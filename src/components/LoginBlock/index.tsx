/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginBlock.module.scss';
import { auth } from '../../utils/service/auth';

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      navigate('/');
      e.preventDefault();
    } catch (err: any) {
      const error = err.response?.data.message;
      console.log(error);
    }
  };

  const handlerRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      navigate('/');
      e.preventDefault();
      const data = await auth.register({ email, password });
      if (data) {
        setIsLogin(!isLogin);
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      console.log(error);
    }
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={isLogin ? loginHandler : handlerRegister}
      >
        <h1>{isLogin ? 'Enter email and password' : 'Registration'}</h1>
        <input
          placeholder="Email"
          type="Email"
          className={styles.field}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="Password"
          className={styles.field}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div className={styles.islogin}>
        {isLogin ? (
          <button onClick={() => setIsLogin(!isLogin)}>
            You don't have an account?
          </button>
        ) : (
          <button onClick={() => setIsLogin(!isLogin)}>
            Already have an account?
          </button>
        )}
      </div>
      <Link to="/">Home</Link>
    </>
  );
};

export default Login;
