'use client';

import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import FormInput from '../FormInput/FormInput';
import { Balloons } from '@/components';
import balloonsLeft from '../../../../assets/img/pink-balloons-left.png';
import balloonsRight from '../../../../assets/img/pink-balloons-right.png';

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
    <div className="relative max-w-[360px] mt-[36px] mx-auto px-5 py-[51px] bg-extraAccent md:rounded-3xl md:mt-[88px] md:min-w-[608px] md:px-[83px] md:py-[57px] xl:mr-0">
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
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="ml-6 font-inter text-[16px] -tracking-[0.16px] font-medium leading-[19px]"
          >
            Wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder="Twoja wiadomość..."
            className="min-h-[136px] outline-none  px-6 py-5 border-solid border-[#808080] rounded-[9px] border-[1px] bg-white font-inter text-[18px] -tracking-[0.16px] font-medium resize-none  md:text-[20px] md:leading-[24px] md:tracking-[0.2px]"
          ></textarea>
        </div>
        <button className="w-full bg-accent text-white uppercase px-8 py-6 rounded-3xl font-anzeigen text-[28px] font-medium -tracking-[0.28px] md:text-[40px] md:leading-[32px]">
          Wyślij
        </button>
      </form>
      <Balloons
        img={balloonsLeft}
        alt="pink balloons one"
        className="hidden w-[412px] h-[419px] -rotate-[30deg] -top-[90px] -left-[110px] md:block"
      />
      <Balloons
        img={balloonsRight}
        alt="pink balloons two"
        className="hidden w-[344px] h-[350px] bottom-[95px] -right-[100px] md:block"
      />
    </div>
  );
};

export default ContactForm;
