import { HfInference } from "@huggingface/inference";
import { ToolType, APIResponseType } from '../constants/constant';

const inference = new HfInference(process.env.REACT_APP_HG_TOKEN);

export const useInferenceAPI = (
  toolName: string, 
  setBlobOrText: React.Dispatch<React.SetStateAction<string | APIResponseType | undefined>>, 
  setLoading: React.Dispatch<React.SetStateAction<boolean>>, 
  text: string,
  image: FileList | null) => {

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //e.preventDefault();
    setBlobOrText(undefined);
    setLoading(true);

    switch(toolName) {
      case ToolType.TEXT_TO_IMAGE:
        try {
          //'stabilityai/stable-diffusion-2-1'
          const res = await inference.textToImage({
            model: 'SG161222/Realistic_Vision_V1.4',
            inputs: text,
          })
          console.log(new Blob([res]))
          setBlobOrText(URL.createObjectURL(res));
          
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
            setBlobOrText(URL.createObjectURL(res));
            setLoading(false);
          } catch (e) {
            console.log(e)
          }
          break;
        case ToolType.IMAGE_TO_TEXT:
          try {
            if(image) {
              const res = await inference.imageToText({
                data: image[0],
                model: 'nlpconnect/vit-gpt2-image-captioning'
              })
              setBlobOrText(res.generated_text);
              setLoading(false);
            }
          } catch (e) {
            console.log(e)
          }
          break;
        case ToolType.SUMMARIZATION:
          try {
            if(text) {
              const res = await inference.summarization({
                inputs: text,
                model: 'facebook/bart-large-cnn'
              })
              setLoading(false);
              setBlobOrText({
                message: res.summary_text,
                isUserSent: false
              });
              
            }
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
