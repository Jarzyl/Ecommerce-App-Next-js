import { ForwardedRef, forwardRef, HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
}

const ContactInput = forwardRef(
  (
    { label, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="mb-4">
        <label htmlFor={props.id} className="block font-semibold text-black/60">
          {label}
        </label>
        <input
          {...props}
          ref={ref}
          className={`w-full border-2 py-2 my-1 p-2 rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500 ${
            error
              ? "border-red-500"
              : "border-2 py-2 my-1 p-2 rounded-lg bg-slate-100 focus:outline-none focus:border-sky-500 focus:placeholder-sky-500 text-sky-500"
          }`}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

ContactInput.displayName = "ContactInput";

export default ContactInput;