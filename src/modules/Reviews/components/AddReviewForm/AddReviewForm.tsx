'use client';

import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import FormInput from '../../../../components/FormInput/FormInput';
import { toast } from 'react-toastify';
import { setReview } from '@/API/GeneralAPI';
import { FormTextarea } from '@/components';

export type Review = {
  owner: string;
  message: string;
};

type AddReviewFormProps = {
  closeModal: () => void;
  getReviews: () => void;
};

const AddReviewForm = ({ closeModal, getReviews }: AddReviewFormProps) => {
  const formik = useFormik({
    initialValues: {
      owner: '',
      message: '',
    },
    validationSchema: Yup.object().shape({
      owner: Yup.string()
        .min(2, 'Nieprawidłowe Іmię')
        .required('Nieprawidłowe Іmię'),
      message: Yup.string()
        .min(2, 'Nieprawidłowe wiadomość')
        .required('Nieprawidłowe wiadomość'),
    }),
    onSubmit: async (values: Review, { resetForm }) => {
      await setReview(values);
      await getReviews();
      resetForm();
      toast.success('Wiadomość wysłana pomyślnie');
      closeModal();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
      <FormInput
        id="owner"
        label="Imię*"
        inputType="text"
        formik={formik}
        placeholder="Imię"
      />
      <FormTextarea
        id="message"
        label="Wiadomość"
        formik={formik}
        placeholder="Twoja wiadomość..."
      />
      <button
        type="submit"
        className="w-full mt-6 bg-accent text-white uppercase px-8 py-6 rounded-3xl font-anzeigen text-[28px] font-medium -tracking-[0.28px] border-solid border-2 border-transparent hover:bg-extraAccent hover:border-extraText hover:text-extraText transition-colors md:text-[40px] md:leading-[32px]"
      >
        Wyślij
      </button>
    </form>
  );
};

export default AddReviewForm;
