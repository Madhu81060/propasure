import React from "react";

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: any;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 text-left w-full">
        <label className="text-xs font-bold text-slate-750">{label}</label>
        <input
          ref={ref}
          className={`p-3.5 text-xs sm:text-sm border rounded-xl outline-none transition-all bg-white text-primary placeholder:text-slate-400 ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : "border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary hover:border-slate-350"
          } ${className || ""}`}
          {...props}
        />
        {error && (
          <span className="text-[10px] text-red-500 font-bold mt-0.5 pl-1 animate-fadeIn">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

// Textarea Component
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: any;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 text-left w-full">
        <label className="text-xs font-bold text-slate-755">{label}</label>
        <textarea
          ref={ref}
          className={`p-3.5 text-xs sm:text-sm border rounded-xl outline-none transition-all bg-white text-primary placeholder:text-slate-400 resize-none ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : "border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary hover:border-slate-350"
          } ${className || ""}`}
          {...props}
        />
        {error && (
          <span className="text-[10px] text-red-500 font-bold mt-0.5 pl-1 animate-fadeIn">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

// Select Component
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: any;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 text-left w-full">
        <label className="text-xs font-bold text-slate-750">{label}</label>
        <select
          ref={ref}
          className={`p-3.5 text-xs sm:text-sm border rounded-xl outline-none transition-all bg-white text-primary ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : "border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary hover:border-slate-350"
          } ${className || ""}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <span className="text-[10px] text-red-500 font-bold mt-0.5 pl-1 animate-fadeIn">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

// Submit Button Component
interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  loading,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`w-full bg-secondary hover:bg-secondary-light text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl shadow-md cursor-pointer transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
        className || ""
      }`}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Submitting Request...
        </>
      ) : (
        children
      )}
    </button>
  );
};
