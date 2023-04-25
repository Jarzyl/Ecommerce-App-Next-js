import Layout from '@/components/Layout';
import Head from 'next/head';
import { useForm } from 'react-hook-form';

interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    alert('Your message was sent!');
    reset();
  };

  return (
    <>
      <Head>
        <title>Ecommerce App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" type="image/jpg" href=""/>
      </Head>
    <Layout>
    <div className="w-full mx-auto py-4 lg:px-8">
      <h1 className="text-3xl font-bold text-indigo-300 text-center mt-10">Contact Us</h1>
      <h2 className="text-2xl font-bold text-indigo-300 text-center mt-4">If you have any problem or question - write to us - we will help!</h2>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="w-80 mx-auto mt-10 border-2 p-3 rounded-xl">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-bold text-indigo-300">
          Name
        </label>
        <input
          {...register('name', { required: true })}
          type="text"
          id="name"
          placeholder='name'
          className={`w-full bg-gray-100 py-2 px-4 rounded-xl text-indigo-300 border-2 border-gray-100 focus:outline-none focus:border-indigo-300 focus:placeholder-indigo-300 ${
            errors.name ? 'border-red-500' : 'bg-gray-100 w-60 py-2 px-4 rounded-xl text-indigo-300 border-2 border-gray-100 focus:outline-none focus:border-indigo-300 focus:placeholder-indigo-300'
          }`}/>
        {errors.name && (
          <span className="text-sm text-red-500">Name is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-bold text-indigo-300">
          Email
        </label>
        <input
          {...register('email', { required: true })}
          type="email"
          id="email"
          placeholder='email'
          className={`w-full bg-gray-100 py-2 px-4 rounded-xl text-indigo-300 border-2 border-gray-100 focus:outline-none focus:border-indigo-300 focus:placeholder-indigo-300 ${
            errors.email ? 'border-red-500' : 'bg-gray-100 w-60 py-2 px-4 rounded-xl text-indigo-300 border-2 border-gray-100 focus:outline-none focus:border-indigo-300 focus:placeholder-indigo-300'
          }`}/>
        {errors.email && (
          <span className="text-sm text-red-500">Email is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-2 font-bold text-indigo-300">
          Subject
        </label>
        <input
          {...register('subject', { required: true })}
          type="text"
          id="subject"
          placeholder='subject'
          className={`w-full bg-gray-100 py-2 px-4 rounded-xl text-indigo-300 border-2 border-gray-100 focus:outline-none focus:border-indigo-300 focus:placeholder-indigo-300 ${
            errors.subject ? 'border-red-500' : 'bg-gray-100 w-60 py-2 px-4 rounded-xl text-indigo-300 border-2 border-gray-100 focus:outline-none focus:border-indigo-300 focus:placeholder-indigo-300'
          }`}/>
        {errors.subject && (
          <span className="text-sm text-red-500">Subject is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-bold text-indigo-300">
          Message
        </label>
        <textarea
          {...register('message', { required: true })}
          id="message"
          placeholder='Your message!'
          className={`w-full bg-gray-100 py-2 px-4 rounded-xl text-indigo-300 border-2 border-gray-100 focus:outline-none focus:border-indigo-300 focus:placeholder-indigo-300 ${
            errors.message ? 'border-red-500' : 'bg-gray-100 w-60 py-2 px-4 rounded-xl text-indigo-300 border-2 border-gray-100 focus:outline-none focus:border-indigo-300 focus:placeholder-indigo-300'
          }`}/>
        {errors.message && (
          <span className="text-sm text-red-500">Message is required</span>
        )}
      </div>
      <div className='flex justify-center items-center'>
      <button
        type="submit"
        className="px-4 py-2 font-bold text-white bg-indigo-400 rounded hover:bg-indigo-500 focus:outline-none">
        Send message!
      </button>
      </div>
    </form>
    </Layout>
    </>
  );
}
