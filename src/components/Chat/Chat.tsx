import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FullPageLayout from '../FullPageLayout';
import ChatContent from './ChatContent';
import ChatMessageBar from './ChatMessageBar';
import ChatHeader from './ChatHeader';

const Chat = () => {
  const [searchText, setSearchText] = useState("");
  const [messages, setMessages] = useState();

  const clearInput = () => setSearchText("");
  const location = useLocation();

  return (
    <FullPageLayout className=''>
      <section className='flex flex-row h-[95%] max-w-7xl m-auto justify-center overflow-x-hidden'>
        <div className='flex flex-col flex-auto h-full p-6'>
          <div className='flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4'>
            <ChatHeader 
              searchText={searchText} 
              setSearchText={setSearchText} 
              clearInput={clearInput} 
              headerName={location.pathname.split('/')[1]}
            />
            <div className='flex flex-col h-full overflow-x-auto mb-4'>
              <ChatContent />
            </div>
            <ChatMessageBar />
          </div>
        </div>
      </section>
    </FullPageLayout>
  )
}

export default Chat;