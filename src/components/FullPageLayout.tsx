import { ReactNode } from 'react';

interface Props {
  children?: ReactNode,
  className: string
}

const FullPageLayout = ({ children, className="" }: Props) => {
  return (
    <section className={`w-full h-screen inline-block z-0 bg-light p-12 xs:px-6 ${className}`}>
      {children}
    </section>
  )
}

export default FullPageLayout;