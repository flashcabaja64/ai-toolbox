import React, { useState, useEffect, useRef } from 'react';
import Modal from '../Modal';

type ChatContentProps = {
  messages: { message: JSX.Element | string, isUserSent: boolean }[] | undefined;
  filteredMessages: { message: JSX.Element, isUserSent: boolean }[]
}

const ChatContent = ({ filteredMessages }: ChatContentProps ) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState<any>("");
  const scrollToBottom = useRef<any>(null);

  const autoScrollToBottom = () => {
    scrollToBottom.current?.scrollIntoView({ 
      behavior: "smooth", block: "end" 
    })
  }
  useEffect(() => {
    autoScrollToBottom();
  },[filteredMessages])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const setImageModal = (idx: number) => {
    isModalOpen === false ? setImgSrc(filteredMessages[idx]) : setImgSrc("");
  }

  return (
    <div className='flex flex-col h-full'>
      <div className='grid grid-cols-12 gap-y-2'>
        {/* recipient" */}
        {
          filteredMessages.map((item, idx) => {
            //TODO: Need to pass last sent message as alt text for image.
            // let altText = item.isUserSent && item.message
            
            if(!item.isUserSent) {
              return (
                <div key={idx} className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      AI
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>
                        {
                          typeof item === 'string' ? (
                            <span onClick={() => {
                              toggleModal();
                              setImageModal(idx);
                            }}>
                              <img src={`${item}`} className="cursor-pointer" width="250px" height="250px" />
                            </span>
                          ) : (
                            item.message
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            } else {
              {/* sender" */}
              return (
                <div key={idx} className="col-start-6 col-end-13 p-3 rounded-lg">
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
      <>
        {isModalOpen && (
          <Modal toggleModal={toggleModal}>
            <img src={`${imgSrc}`} alt="" />
          </Modal>
        )}
      </>
      <div ref={scrollToBottom}></div>
    </div>
  )
}

export default ChatContent;