import { ReactElement } from 'react';

type ButtonComponentProps = {
  className?: string;
  disabled?: boolean;
  [x:string]: any;
  children?: any;
}

const Button = ({ className, disabled, children, ...rest}: ButtonComponentProps) => {
  return (
    <button 
      disabled={disabled}
      type="button" 
      {...rest}
      className={`text-white focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;