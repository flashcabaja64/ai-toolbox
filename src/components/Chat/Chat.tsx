import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FullPageLayout from '../FullPageLayout';
import ChatContent from './ChatContent';
import ChatMessageBar from './ChatMessageBar';
import ChatHeader from './ChatHeader';
import { useInferenceAPI } from '../../hooks/useInferenceAPI';
import { APIResponseType } from '../../constants/constant'

const Chat = () => {
  
  const [blobOrText, setBlobOrText] = useState<string | APIResponseType | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("")
  const [image, setImage] = useState<FileList | null>(null);
  const [messages, setMessages] = useState<any>([]);

  const clearInput = () => setSearchText("");
  const location = useLocation();
  const toolName = location.pathname.split('/')[1]

  const getPrompt = (text: string) => {
    setPrompt(text)
  }

  const onSubmit = useInferenceAPI(toolName, setBlobOrText, setLoading, prompt, image);

  useEffect(() => {
    if(blobOrText) {
      console.log('useeffect')
      setMessages([...messages, blobOrText])
    }
  },[blobOrText])
  
  return (
    <FullPageLayout className=''>
      <section className='flex flex-row h-[95%] max-w-7xl m-auto justify-center overflow-x-hidden'>
        <div className='flex flex-col flex-auto h-full p-6'>
          <div className='flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4'>
            <ChatHeader 
              searchText={searchText} 
              setSearchText={setSearchText} 
              clearInput={clearInput} 
              headerName={toolName}
            />
            <div className='flex flex-col h-full overflow-x-auto mb-4'>
              <ChatContent messages={messages} />
            </div>
            <ChatMessageBar 
              loading={loading} 
              onSubmit={onSubmit} 
              getPrompt={getPrompt} 
              setMessages={setMessages} 
              messages={messages} 
            />
          </div>
        </div>
      </section>
    </FullPageLayout>
  )
}

export default Chat;