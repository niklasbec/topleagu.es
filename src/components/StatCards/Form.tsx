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
            className="bg-zinc-900 font-inter font-extrabold rounded-lg text w-10 aspect-square text-white mx-1 flex items-center justify-center text-xl"
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
};

export default Form;
