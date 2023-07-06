import React from 'react';
import { IGenerateOutput, ToolType } from '../constants/constant';

const GenerateOutput = ({toolName, blob, data}: IGenerateOutput) => {

  switch(toolName) {
    case ToolType.TEXT_TO_IMAGE:

      if(typeof(data) === 'string') {
        return (
          <div className='flex justify-center'>
            <img src={blob} alt={data} />
          </div>
        )
      }
      break;

      case ToolType.TEXT_TO_SPEECH:
        return (
          <div className='flex justify-center'>
            <audio controls src={blob} />
          </div>
        )
      case ToolType.IMAGE_TO_TEXT:
          return (
            <div className='flex justify-center'>
              <p>{blob}</p>
            </div>
          )
      default:
        console.log('UNCATCHED CONDITION!');
        break;
  }
}

export default GenerateOutput;