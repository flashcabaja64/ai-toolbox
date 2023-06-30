import { ReactElement } from 'react';

type ButtonComponentProps = {
  className?: string;
  children?: ReactElement;
}

const Button = ({ className, children, ...rest}: ButtonComponentProps) => {
  return (
    <button className={`${className}`}>
      {children}
    </button>
  )
}

export default Button;