import React from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  label,
}) => {
  return (
    <div>
      <p className="font-semibold text-black/60 mt-2">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className="border py-2 my-1 p-2 rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500 w-[280px] md:w-[400px] xl:w-[660px] mx-auto"
        required
      />
    </div>
  );
};

export default InputField;
