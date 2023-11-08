import React from 'react';
import emailjs from '@emailjs/browser';
import FullPageLayout from './FullPageLayout';

const Contact = () => {

  const { REACT_APP_EMAIL_SERVICE, REACT_APP_EMAIL_TEMPLATE, REACT_APP_EMAIL_PUB_KEY } = process.env;

  const sendEmail: React.FormEventHandler<HTMLFormElement>  = (e) => {
    e.preventDefault();
    
    const { email, subject, message }: any = e.target as HTMLInputElement;

    const contactForm = {
      email: email.value,
      subject: subject.value,
      message: message.value
    }

    emailjs.send(REACT_APP_EMAIL_SERVICE as string, REACT_APP_EMAIL_TEMPLATE as string, contactForm, REACT_APP_EMAIL_PUB_KEY)
    .then((result) => {
      console.log(result);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <FullPageLayout className='bg-gray-900'>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen">
        <h2 className="mb-4 text-4xl font-extrabold text-center text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Suggestions about possible features? Let us know.</p>

        <form className="space-y-8" onSubmit={sendEmail}>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
              <input type="email" name="email" className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="user@email.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
              <input type="text" name="subject" className="block p-3 w-full text-sm  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-primary-500 focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
              <textarea name="message" rows={6} className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Send message</button>
        </form>
      </div>
    </FullPageLayout>
  )
}

export default Contact;