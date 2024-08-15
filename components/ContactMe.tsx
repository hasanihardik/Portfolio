import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {

    const {register,handleSubmit} = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (formData) => {
        window.location.href = `mailto:emal.mail@mail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };
    

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl pb-10">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-lg md:text-2xl text-center">
          I have got just what you need. &nbsp;
          <span className="decoration-[#f7ab0a]/50 underline">Lets Talk.</span>
        </h4>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-5 w-5 md:h-6 md:w-6 animate-pulse" />
            <p className="text-base md:text-lg">hasanihardik@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 max-w-7xl px-6 mx-auto" action="">
          <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>

          <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

          <textarea {...register('message')} placeholder="Message" className="contactInput" />

          <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
