import React, { useState, useEffect } from 'react';
import FullPageLayout from '../components/FullPageLayout';
import { HfInference } from "@huggingface/inference";
import { Spinner, MagnifyGlass } from '../assets/svgIcons';
import Button from '../components/Button';

const inference = new HfInference(process.env.REACT_APP_HG_TOKEN);

const TextToImage: React.FC = () => {

  const [image, setImage] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean | undefined>(false);
  const [text, setText] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setImage(undefined)
    setLoading(true);
    
    inference.textToImage({
      model: 'stabilityai/stable-diffusion-2',
      inputs: text,
    })
    .then(res => {
      setImage(URL.createObjectURL(res));
      setLoading(false);
    })
    .catch((err: any) => console.log(err))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value)
  }
  return (
    <FullPageLayout className=''>
      <h1 className='text-[50px] text-center'>
        Text to Image
      </h1>
      <section className="block m-auto w-[80vw] pb-10 mt-5">
        {/* <FormControl className="min-w-xl max-w-2xl">
          <FormLabel>Enter Text Prompt for Image Conversion</FormLabel>
          <TextField 
            type="text"
            name="text-to-image"
            value={text}
            disabled={loading}
            onChange={handleInputChange}
          />
          <Button disabled={loading} onClick={(e) => onSubmit(e)}>
            {loading ? <Spinner/> : "Submit"}
          </Button>
        </FormControl> */}
        <form onSubmit={onSubmit}>   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyGlass />
            </div>
            <input 
              type="search" 
              id="default-search" 
              className="block disabled:bg-gray-500 disabled:cursor-not-allowed w-full p-4 pl-10 text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
              placeholder="Generate an Image by text" 
              value={text}
              onChange={handleInputChange}
              disabled={loading} 
            />
            <Button 
              disabled={loading}
              onClick={onSubmit}
              className='absolute right-2.5 bottom-2.5 top-2 disabled:cursor-not-allowed'
            >
              {!loading ? "Search" : <Spinner />}
            </Button>
          </div>
        </form>
      </section>

      {image && (
        <div className='flex justify-center'>
          <img src={image} alt={text} />
        </div>
      )}
    </FullPageLayout>
  )
}

export default TextToImage;