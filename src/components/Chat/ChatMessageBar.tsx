import { useState, useEffect } from 'react';
import Button from '../Button';
import { SendIcon, Spinner } from '../../assets/svgIcons';

const ChatMessageBar = ({ onSubmit, getPrompt, setMessages, messages, loading, toolName }: any) => {
  const [prompt, setPrompt] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  
  useEffect(() => {}, [errorText])

  const handleChange = (text: string) => {
    getPrompt(text);
    setPrompt(text);
  }

  const handleSubmit = () => {
    if(inputValidation()) {
      setMessages([...messages, { message: prompt, isUserSent: true }])
      onSubmit();
      setPrompt("");
    }
  }

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const inputValidation = () => {
    let promptWordLength = prompt.trim().split(" ").length;
    setErrorText("");

    if(!prompt) {
      setErrorText("Please start typing a prompt.");
      return false;
    } else if(promptWordLength <= 4) {
      setErrorText("Please type five words or more.");
      return false;
    }
    return true;
  }

  return (
    <div className='flex flex-row items-center h-16 rounded-xl bg-white w-full px-4'>
      {
        toolName === 'image-to-text' && (
          <div className='mr-2'>
            <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
              </svg>
            </button>
          </div>
        )
      }
      <div className="flex-grow">
        <div className="relative w-full">
          <input 
            type="text" 
            value={prompt}
            disabled={loading} 
            placeholder='Start typing...'
            onChange={e => handleChange(e.target.value)} 
            onKeyDown={(e) => onEnter(e)}
            className={`flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 px-4 h-10 ${errorText && 'border-red-500 focus:border-red-500'} ${loading && 'cursor-not-allowed bg-gray-300'}`} 
          />
        </div>
        {errorText && <p className='text-red-500 text-sm'>{errorText}</p>}
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