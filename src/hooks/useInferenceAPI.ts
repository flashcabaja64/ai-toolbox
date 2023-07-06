import { HfInference } from "@huggingface/inference";
import { ToolType } from '../constants/constant';

const inference = new HfInference(process.env.REACT_APP_HG_TOKEN);

export const useInferenceAPI = (
  toolName: string, 
  setBlob: React.Dispatch<React.SetStateAction<string | undefined>>, 
  setLoading: React.Dispatch<React.SetStateAction<boolean>>, 
  text: string) => {

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBlob(undefined);
    setLoading(true);

    switch(toolName) {
      case ToolType.TEXT_TO_IMAGE:
        try {
          const res = await inference.textToImage({
            model: 'stabilityai/stable-diffusion-2',
            inputs: text,
          })
          setBlob(URL.createObjectURL(res));
          setLoading(false);
        } catch (e) {
          console.log(e)
        }
        break;
        case ToolType.TEXT_TO_SPEECH:
          try {
            const res = await inference.textToSpeech({
              model: 'espnet/kan-bayashi_ljspeech_vits',
              inputs: text,
            })
            setBlob(URL.createObjectURL(res));
            setLoading(false);
          } catch (e) {
            console.log(e)
          }
          break;
        default:
          console.log('UNCATCHED CONDITION!');
          break;
    }
  }
  return onSubmit;
  
}
