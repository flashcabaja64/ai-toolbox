import React, { useState } from 'react';
import Button from '../Button';
import { SendIcon, Spinner } from '../../assets/svgIcons';

const ChatMessageBar = ({ onSubmit, getPrompt, setMessages, messages, loading }: any) => {
  const [prompt, setPrompt] = useState<string>("");

  const handleChange = (text:string) => {
    getPrompt(text);
    setPrompt(text);
  }

  const handleSubmit = () => {
    setMessages([...messages, { message: prompt, isUserSent: true }])
    onSubmit();
    setPrompt("");
  }

  return (
    <div className='flex flex-row items-center h-16 rounded-xl bg-white w-full px-4'>
      {/* <div>
        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
          </svg>
        </button>
      </div> */}
      <div className="flex-grow">
        <div className="relative w-full">
          <input 
            type="text" 
            value={prompt}
            disabled={loading} 
            placeholder='Start typing...'
            onChange={e => handleChange(e.target.value)} 
            className={`flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 ${loading && 'cursor-not-allowed bg-gray-300'}`} 
          />
          <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="ml-4">
        {loading ? <Spinner /> : (
          <Button disabled={loading} id="chat_submit" className="flex items-center justify-center rounded-xl text-white px-4 py-1 flex-shrink-0" onClick={handleSubmit}>
            <span>Send</span>
            <span className="ml-2">
              <SendIcon />
            </span>
          </Button>
        )}
      </div>
    </div>
  )
}

export default ChatMessageBar;