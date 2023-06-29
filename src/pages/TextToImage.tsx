import React, {useEffect, useState} from 'react';
import { TextField, Button, FormControl, FormLabel } from '@mui/material';
import Layout from '../components/Layout';
import { HfInference } from "@huggingface/inference";

const TextToImage: React.FC = () => {
  const inference = new HfInference(process.env.REACT_APP_HG_TOKEN);
  const [image, setImage] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>("")

  function getImage() {
    setLoading(true);

    inference.textToImage({
      model: 'stabilityai/stable-diffusion-2',
      inputs: text,
    }).then(result => {
      let blob = URL.createObjectURL(result)
      setLoading(false)
      setImage(blob)
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value)
  }
  return (
    <Layout className=''>
      <h1 className='text-[50px] text-center'>
        Text to Image
      </h1>
      <section className="flex justify-center">
        <FormControl className="min-w-xl max-w-2xl">
          <FormLabel>Enter Text Prompt for Image Conversion</FormLabel>
          <TextField 
            type="text"
            name="text-to-image"
            value={text}
            onChange={handleInputChange}
          />
          <Button>Submit</Button>
        </FormControl>
        
      </section>

      <div>
        <img src={image}/>
      </div>
    </Layout>
  )
}

export default TextToImage;