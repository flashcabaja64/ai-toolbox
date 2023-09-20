import React from 'react';

type ChatContentProps = {
  messages: { message: JSX.Element | string, isUserSent: boolean }[] | undefined;
  filteredMessages: { message: JSX.Element, isUserSent: boolean }[]
}

const ChatContent = ({ filteredMessages }: ChatContentProps ) => {
  
  return (
    <div className='flex flex-col h-full'>
      <div className='grid grid-cols-12 gap-y-2'>
        {/* recipient" */}
        {
          filteredMessages.map((item, i) => {
            if(!item.isUserSent) {
              return (
                <div key={i} className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      AI
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>
                        {
                          typeof item === 'string' ? <img src={`${item}`} /> : item.message
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            } else {
              {/* sender" */}
              return (
                <div key={i} className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-center justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      Me
                    </div>
                    <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                      <div>{item.message}</div>
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default ChatContent;