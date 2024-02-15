'use client';

import { FormikProps } from 'formik';
import { useEffect, useState } from 'react';

type Props = {
  id: string;
  label: string;
  formik: FormikProps<any>;
  placeholder?: string;
  className?: string;
};

export default function FormTextarea({
  label,
  id,
  formik,
  className = '',
  placeholder = '',
}: Props) {
  const error = formik.touched[id] && formik.errors[id];

  const [borderColor, setBorderColor] = useState(
    error ? 'border-accent' : 'border-[#808080]'
  );

  useEffect(() => {
    setBorderColor(error ? 'border-accent' : 'border-[#808080]');
  }, [error]);

  return (
    <div className="relative h-auto flex flex-col w-full gap-2 tra">
      <label
        htmlFor={id}
        className="ml-6 font-inter text-[16px] -tracking-[0.16px] leading-[19px] font-medium"
      >
        {label}
      </label>
      <div
        className={`flex gap-2 p-[1.5px] ${borderColor} rounded-[9px] border-[1px] bg-white font-inter text-[18px] -tracking-[0.18px] font-medium md:text-[20px] md:leading-[24px] md:tracking-[0.2px]`}
      >
        <textarea
          onChange={formik.handleChange}
          id={id}
          value={formik.values[id]}
          placeholder={placeholder}
          className={`w-full min-h-[136px] outline-none resize-none px-6 py-5 border-solid bg-transparent font-inter text-[18px] -tracking-[0.18px] font-medium md:text-[20px] md:leading-[24px] md:tracking-[0.2px]  ${className} ${
            borderColor === 'border-accent' ? 'text-accent' : ''
          }`}
        ></textarea>
      </div>
      {error && (
        <p className="absolute -bottom-[32px] right-0 text-accent">
          {String(error)}
        </p>
      )}
    </div>
  );
}
