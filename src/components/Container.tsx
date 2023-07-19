import React from 'react';

interface Props {
  children?: React.ReactNode | JSX.Element,
  className: string
}

const Container = ({children, className}:Props) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ${className}`}>
      {children}
    </div>
  )
}

export default Container;