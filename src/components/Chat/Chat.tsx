import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const [filteredMessages, setFilteredMessages] = useState<any>([])

  const clearInput = () => setSearchText("");
  const location = useLocation();
  const toolName = location.pathname.split('/')[1]
  const onSubmit = useInferenceAPI(toolName, setBlobOrText, setLoading, prompt, image);

  const getPrompt = (text: string) => {
    setPrompt(text)
  }

  const searchMessages = (text: string) => {
    const newMessages = messages.filter((item: { message: string }) => {
      return item.message.toLowerCase().includes(text.toLowerCase())
    })
    
    setFilteredMessages(newMessages)
  }  

  useEffect(() => {
    if(blobOrText) {
      setMessages([...messages, blobOrText]);
      setFilteredMessages([...messages, blobOrText])
    }
  },[blobOrText])
  
  return (
    <section className='flex flex-row h-[95%] max-w-7xl m-auto justify-center overflow-x-hidden'>
      <div className='flex flex-col flex-auto h-full p-6 xs:p-2'>
        <div className='flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4'>
          <ChatHeader 
            searchText={searchText} 
            setSearchText={setSearchText} 
            clearInput={clearInput} 
            headerName={toolName}
            searchMessages={searchMessages}
          />
          <div className='flex flex-col h-full overflow-x-auto mb-4'>
            <ChatContent 
              messages={messages} 
              filteredMessages={filteredMessages}
            />
          </div>
          <ChatMessageBar 
            loading={loading} 
            onSubmit={onSubmit} 
            getPrompt={getPrompt} 
            setMessages={setMessages} 
            messages={messages} 
            toolName={toolName}
          />
        </div>
      </div>
    </section>
  )
}

export default Chat;