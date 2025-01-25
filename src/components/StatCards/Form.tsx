import React from 'react';

interface FormProps {
  form: string;
}

const Form = ({ form }: FormProps) => {
  return (
    <div className="flex mt-4">
      {form.split('').map((letter, index) => {
        return (
          <div
            key={index}
            className="bg-zinc-900 font-inter font-extrabold text w-7 h-7 aspect-square text-white mx-0.5 flex items-center justify-center text-xl"
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
};

export default Form;
