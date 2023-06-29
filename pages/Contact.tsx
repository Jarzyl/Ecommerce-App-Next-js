import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout/Layout";
import CustomHead from "@/components/Layout/CustomHead";
import Input from "@/components/ContactInput";

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
        position: "top-center",
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
      <CustomHead title="Ecommerce Shop | Contact" icon="/shop.png" />
      <Layout>
        <div className="w-[350px] md:w-full text-center mx-auto mt-10">
          <h1 className="text-3xl font-bold text-black text-center">
            Contact Us
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-400 text-center mt-4">
            If you have any problem or question - write to us - we will help!
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[300px] md:w-[500px] h-full mx-auto mt-3 md:mt-6 border-2 p-3 rounded-xl"
        >
          <Input
            label="Full name"
            id="name"
            placeholder="Enter your full name"
            {...register("name", { required: true })}
            error={errors.name ? "Name is required" : undefined}
          />

          <Input
            label="Email"
            id="email"
            placeholder="Enter your email address"
            {...register("email", { required: true })}
            error={errors.email ? "Email is required" : undefined}
          />

          <Input
            label="Subject"
            id="subject"
            placeholder="Enter your subject"
            {...register("subject", { required: true })}
            error={errors.subject ? "Subject is required" : undefined}
          />

          <Input
            label="Message"
            id="message"
            placeholder="Enter your message"
            as="textarea"
            {...register("message", { required: true })}
            error={errors.message ? "Message is required" : undefined}
          />

          <div className="flex justify-center items-center bg-gray-700 text-gray-200 text-lg w-44 h-10 mt-5 mx-auto rounded-lg cursor-pointer hover:bg-sky-500 duration-200">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </Layout>
    </>
  );
}
