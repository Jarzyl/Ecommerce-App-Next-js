import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/Layout/Layout';
import CustomHead from '@/components/Layout/CustomHead';

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
    toast.success(
      <div className="flex justify-center">
        <span className="text-green-500">Your message has been sent!</span>
      </div>,
      {
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    reset();
  };

  return (
    <>
    <CustomHead title="Ecommerce Shop | Contact" icon="/shop.png"/>
    <Layout>
    <div className="w-[300px] md:max-w-4xl xl:max-w-7xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-black text-center">Contact Us</h1>
      <h2 className="text-xl md:text-2xl font-medium text-gray-400 text-center mt-4">If you have any problem or question - write to us - we will help!</h2>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="w-[300px] md:w-[500px] h-full mx-auto mt-3 md:mt-6 border-2 p-3 rounded-xl">
      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold text-black/60">
          Full name
        </label>
        <input
          {...register('name', { required: true })}
          type="text"
          id="name"
          placeholder='Enter your full name'
          className={`w-full border-2 py-2 my-1 p-2 rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500 ${
            errors.name ? 'border-red-500' : 'border-2 py-2 my-1 p-2 rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500'
          }`}/>
        {errors.name && (
          <span className="text-sm text-red-500">Name is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold text-black/60">
          Email
        </label>
        <input
          {...register('email', { required: true })}
          type="email"
          id="email"
          placeholder='Enter your email address'
          className={`w-full border-2 py-2 my-1 p-2 rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500 ${
            errors.email ? 'border-red-500' : 'border-2 py-2 my-1 p-2 rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500'
          }`}/>
        {errors.email && (
          <span className="text-sm text-red-500">Email is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block font-semibold text-black/60">
          Subject
        </label>
        <input
          {...register('subject', { required: true })}
          type="text"
          id="subject"
          placeholder='Enter your subject'
          className={`w-full border-2 py-2 my-1 p-2 rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500 ${
            errors.subject ? 'border-red-500' : 'border-2 py-2 my-1 p-2 rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500'
          }`}/>
        {errors.subject && (
          <span className="text-sm text-red-500">Subject is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-semibold text-black/60">
          Message
        </label>
        <textarea
          {...register('message', { required: true })}
          id="message"
          placeholder='Enter your message'
          className={`w-full border-2 py-2 my-1 p-2 rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500 ${
            errors.message ? 'border-red-500' : 'border-2 py-2 my-1 p-2 rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500'
          }`}/>
        {errors.message && (
          <span className="text-sm text-red-500">Message is required</span>
        )}
      </div>
      <div className="flex justify-center items-center bg-gray-700 text-gray-200 text-lg w-44 h-10 mt-5 mx-auto rounded-lg cursor-pointer hover:bg-sky-500 duration-200">
            <button
            type="submit">Send Message</button>
            </div>
    </form>
    </Layout>
    </>
  );
};

