import { useState } from 'react';
import { HfInference } from "@huggingface/inference";

const inference = new HfInference(process.env.REACT_APP_HG_TOKEN);

export const inferenceAPI = (apiFunction:Function, input:any) => {
  const [response, setResponse] = useState({
    data: '',
    loading: false,
    error: null
  })

  // const textToImage = async (input: string) => {
  //   setResponse({
  //     data: '',
  //     loading: true,
  //     error: null
  //   })

  //   await inference.textToImage({
  //     model: 'stabilityai/stable-diffusion-2',
  //     inputs: input,
  //   })
  //   .then(res => {
  //     let blob = URL.createObjectURL(res);
  //     setResponse({
  //       ...response,
  //         data: blob,
  //         loading: false,
  //     })
  //   })
  //   .catch((err: any) => {
  //     setResponse({
  //       ...response,
  //       loading: false,
  //       error: err
  //     })
  //   })
  // }

  return {
    response
  }
}
