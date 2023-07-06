import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Spinner, MagnifyGlass } from '../assets/svgIcons';
import Button from '../components/Button';
import { useInferenceAPI } from '../hooks/useInferenceAPI';
import GenerateOutput from '../components/GenerateOutput';
import { ITool, ToolType } from '../constants/constant';

const Tool = ( { toolName }: ITool) => {

  const [blob, setBlob] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<FileList | null>(null) ;

  const onSubmit = useInferenceAPI(toolName, setBlob, setLoading, text, image);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, files } = e.target;
    if(ToolType.IMAGE_TO_TEXT) {
      setImage(files)

    } else {
      setText(value)
    }
    
  }

  const capitalizeToolName = toolName.charAt(0).toUpperCase() + toolName.slice(1);
  
  return (
    <Layout className=''>
      <h1 className='text-[50px] text-center'>
        {`${capitalizeToolName}`}
      </h1>
      <section className="block m-auto w-[80vw] pb-10">
        <form onSubmit={onSubmit}>   
          <label htmlFor={`generate-${toolName}`} className="mb-2 text-sm font-medium sr-only text-white">Generate</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyGlass />
            </div>
            {toolName !== ToolType.IMAGE_TO_TEXT ? 
              <input 
                type="search" 
                id={`generate-${toolName}`} 
                className="block disabled:bg-gray-500 disabled:cursor-not-allowed w-full p-4 pl-10 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                placeholder={`Generate ${toolName}`}
                value={text}
                onChange={handleInputChange}
                disabled={loading} 
              /> :
              <input 
                type="file" 
                id="file-selector" 
                accept=".jpg, .jpeg, .png"
                onChange={handleInputChange}
              />
            }

            <Button 
              disabled={loading}
              onClick={onSubmit}
              className='absolute right-2.5 bottom-2.5 top-2 disabled:cursor-not-allowed'
            >
              {!loading ? "Generate" : <Spinner />}
            </Button>
          </div>
        </form>
      </section>

      {blob && (
        <GenerateOutput 
          toolName={toolName}
          blob={blob}
          data={toolName !== ToolType.IMAGE_TO_TEXT ? text : image}
        />
      )}
    </Layout>
  )
}

export default Tool;