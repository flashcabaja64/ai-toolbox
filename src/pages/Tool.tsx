import React, { useState } from 'react';
import { Spinner, MagnifyGlass } from '../assets/svgIcons';
import Button from '../components/Button';
import { useInferenceAPI } from '../hooks/useInferenceAPI';
import GenerateOutput from '../components/GenerateOutput';
import { ITool, ToolType } from '../constants/constant';
import FullPageLayout from '../components/FullPageLayout';

const Tool = ( { toolName }: ITool) => {

  const [blob, setBlob] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<FileList | null>(null) ;

  const onSubmit = useInferenceAPI(toolName, setBlob, setLoading, text, image);
  
  const capitalizeToolName = toolName.split('-').map((t:string) => t.charAt(0).toUpperCase() + t.substring(1)).join('-');
  
  return (
    <FullPageLayout className=''>
      <h1 className='text-[50px] text-center text-white'>
        {`${capitalizeToolName}`}
      </h1>
      <section className="block m-auto w-[80vw] pb-10 mt-5">
        <form onSubmit={onSubmit}>   
          <label htmlFor={`generate-${toolName}`} className="mb-2 text-sm font-medium sr-only text-white">Generate</label>
          <div className="relative">
            
            {toolName !== ToolType.IMAGE_TO_TEXT ? 
              <>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MagnifyGlass />
                </div>
                <input 
                  type="search" 
                  id={`generate-${toolName}`} 
                  className="block disabled:bg-gray-500 disabled:cursor-not-allowed w-full p-4 pl-10 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                  placeholder={`Generate ${toolName}`}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  disabled={loading} 
                /> 
              </>
              :
              <>
                <label className="block mb-2 text-sm font-medium text-white" htmlFor="file_input">Upload file</label>
                <input 
                  className="block w-full text-md border rounded-lg hover:file:bg-gray-400 hover:file:cursor-pointer file:p-2 file:text-gray-100 file:bg-gray-500 file:border-0 cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" 
                  aria-describedby="file_input_help" 
                  id="file-selector" 
                  accept=".jpg, .jpeg, .png"
                  type="file" 
                  onChange={(e) => setImage(e.target.files)}
                />
                <p className="mt-1 text-sm text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
              </>

            }

            <Button 
              disabled={loading}
              onClick={onSubmit}
              className='absolute right-2.5 bottom-2.5 disabled:cursor-not-allowed'
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
    </FullPageLayout>
  )
}

export default Tool;