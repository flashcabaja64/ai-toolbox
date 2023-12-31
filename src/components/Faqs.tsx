import React, { useState } from 'react';

const Faqs = () => {
  const [isClicked, setIsClicked] = useState<string | number>('0');

  let data = [
    {
      question: 'What is AI Toolbox?',
      answer: 'This website offers a wide array of popular AI tools that can help with work productivity, personal creativity, and many more.'
    },
    {
      question: 'Is there a subscription fee to use?',
      answer: 'No, this is completely free to use. The only drawback is the responses and questions are not saved.'
    }
  ];

  const handleToggle = (idx: string | number) => {
    if(isClicked === idx) return setIsClicked('0')
    setIsClicked(idx)
  }

  const AccordionItem = ({ question, answer, onToggle, active }: { question: string, answer: string, onToggle: () => void, active: boolean }) => (
    <div className='py-2'>
      <div className="flex flex-row justify-between cursor-pointer" onClick={onToggle}>
        <div className={`${active ? 'text-gray-50': 'text-gray-300'} font-semibold`}>{question}</div>
        <div className={`text-2xl ${active ? 'text-gray-50': 'text-gray-300'} font-semibold`}>{active ? '-' : '+'}</div>
      </div>
      {active && <div className='text-gray-300 pt-2'>{answer}</div>}
    </div>
  )

  return (
    <section className='bg-secondary min-h-full' id="faq-section">
      <div className="">
        <h2 className='text-white text-[50px] text-center font-semibold xs:text-[40px]'>
          Frequently Asked Questions
        </h2>

        <div className='max-w-3xl mt-2 divide-y-[1px] m-auto p-3'>
          {data.map(({question, answer}, i) => (
            <AccordionItem 
              question={question} 
              answer={answer} 
              key={i} 
              onToggle={() => handleToggle(i)}
              active={isClicked === i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faqs;