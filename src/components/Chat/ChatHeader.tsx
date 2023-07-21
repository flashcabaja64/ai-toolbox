import React from 'react';
import { MagnifyGlass, CloseButton } from '../../assets/svgIcons';

type ChatHeaderProps = {
  searchText: string;
  setSearchText: (e: any) => void;
  clearInput: () => void;
  headerName: string
}

const ChatHeader = ({ searchText, setSearchText, clearInput, headerName }: ChatHeaderProps) => {

  const filterHeaderName = (name: string): any => {
    if(name.split('-').length > 1) {
      return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") 
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }

  return (
    <div className='flex border-b-[1px] border-b-gray-400 pb-2 justify-between'>
      <p className='my-auto font-medium'>{filterHeaderName(headerName)}</p>
      <div className='relative'>
        <MagnifyGlass className='inline absolute top-[10px] left-1'/>
        <input type="text" id="chat_search" onChange={(e) => setSearchText(e.target.value)} value={searchText} placeholder="Search" className='flex border pl-8 bg-gray-200 rounded-xl focus:outline-none focus:border-indigo-300 w-[100%] h-10'/>
        {searchText && <CloseButton className='absolute top-[12px] right-1' close={clearInput}/>}
      </div>
    </div>
  )
}

export default ChatHeader;