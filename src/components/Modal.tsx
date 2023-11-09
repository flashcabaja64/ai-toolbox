import React from 'react';

const Modal = ({ toggleModal, children}: { toggleModal: React.MouseEventHandler<HTMLDivElement>, children: React.ReactNode | JSX.Element }) => {
  return (
    <section className="fixed z-10 inset-0 overflow-y-auto">
      <div onClick={toggleModal} className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-95"></div>
        </div>

        <div className='absolute z-20 top-0 right-0 p-10'>
          <button className="relative text-2xl font-semibold" type="button">X</button>
        </div>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-[50%] sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          
          {children}
        </div>
      </div>
    </section>
  )
}

export default Modal;