import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

type Inputs = {
  email: string;
  password: string;
};

export default function login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp, loading } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  return (
    <div
      className='relative flex h-screen w-screen flex-col bg-black md:items-center
    md: justify-center md:bg-transparent'
    >
      <Head>
        <title>Netflix</title>
      </Head>

      <Image
        src='https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        layout='fill'
        objectFit='cover'
        className='-z-10 !hidden  opacity-60 sm:!inline'
      ></Image>

      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        className='absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6'
        alt=''
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
      >
        <h1 className='text-4xl'>Sign In</h1>
        <div className='space-y-4'>
          <label htmlFor='' className='inline-block w-full'>
            <input
              type='email'
              {...register('email', { required: true })}
              placeholder='Email'
              className='input'
            />
          </label>
          <label htmlFor='' className='inline-block w-full'>
            <input
              type='password'
              {...register('password', {
                required: 'Password is required',
              })}
              placeholder='Password'
              className='input'
            />
          </label>
          {errors.password && (
            <p role='alert' className='text-[red]'>
              {errors.password?.message}
            </p>
          )}
        </div>

        <button
          type='submit'
          onClick={() => {
            setLogin(true);
          }}
          className='w-full rounded bg-[#e50914] py-3'
        >
          Sign In
        </button>

        <div className='text-[gray]'>
          New to Nerflix?
          <button
            type='submit'
            onClick={() => {
              setLogin(false);
            }}
            className='text-white ml-2 hover:underline'
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}
