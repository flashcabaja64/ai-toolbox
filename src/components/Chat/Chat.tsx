import React, { useState } from 'react';
import FullPageLayout from '../FullPageLayout';
import ChatContent from './ChatContent';
import ChatMessageBar from './ChatMessageBar';
import { MagnifyGlass, CloseButton } from '../../assets/svgIcons';

const Chat = () => {
  const [searchText, setSearchText] = useState("");

  const clearInput = () => {
    setSearchText("")
  }

  return (
    <FullPageLayout className=''>
      <section className='flex flex-row h-[95%] max-w-7xl m-auto justify-center overflow-x-hidden'>
        <div className='flex flex-col flex-auto h-full p-6'>
          <div className='flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4'>
            <div className='flex border-b-[1px] border-b-gray-400 pb-2 justify-between'>
              <p className='my-auto font-medium'>Summarization</p>
              <div className='relative'>
                <MagnifyGlass className='inline absolute top-[10px] left-1'/>
                <input type="text" id="chat_search" onChange={e => setSearchText(e.target.value)} value={searchText} placeholder="Search" className='flex border pl-8 bg-gray-200 rounded-xl focus:outline-none focus:border-indigo-300 w-[100%] h-10'/>
                {searchText && <CloseButton className='absolute top-[12px] right-1' close={clearInput}/>}
              </div>
              
            </div>
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