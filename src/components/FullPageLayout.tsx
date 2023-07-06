import { ReactNode } from 'react';

interface Props {
  children?: ReactNode,
  className: string
}

const FullPageLayout = ({ children, className="" }: Props) => {
  return (
    <section className={`w-full h-screen absolute top-[75px] xs:top-[50px] inline-block bg-light p-12 xs:px-6 ${className}`}>
      {children}
    </section>
  )
}

export default FullPageLayout;