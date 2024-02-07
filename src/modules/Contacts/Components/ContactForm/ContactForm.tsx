'use client';

import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import FormInput from '../FormInput/FormInput';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object().shape({
      userName: Yup.string()
        .min(2, 'Nieprawidłowe Іmię')
        .required('Login is required'),
      email: Yup.string()
        .email('Nieprawidłowy email')
        .required('Email is required'),
    }),
    onSubmit: async values => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div className="container mt-[36px]  mx-auto px-5 py-[51px] w-full bg-extraAccent md:rounded-3xl md:mt-[88px]">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
        <FormInput
          id={'userName'}
          label="Imię*"
          inputType="text"
          formik={formik}
          placeholder="Imię"
        />
        <FormInput
          id={'email'}
          label="E-mail*"
          inputType="text"
          formik={formik}
          placeholder="mail@gmail.com"
        />
        <FormInput
          id={'message'}
          label="Wiadomość"
          inputType="textarea"
          formik={formik}
          placeholder="Twoja wiadomość..."
          className="min-h-[136px]"
        />
        <button className="w-full bg-accent text-white uppercase px-8 py-6 rounded-3xl font-anzeigen text-[40px] font-medium ">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
