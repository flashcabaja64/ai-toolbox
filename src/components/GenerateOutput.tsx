import React from 'react';
import { IGenerateOutput, ToolType } from '../constants/constant';

const GenerateOutput = ({toolName, blob, text}: IGenerateOutput) => {

  switch(toolName) {
    case ToolType.IMAGE:
      return (
        <div className='flex justify-center'>
          <img src={blob} alt={text} />
        </div>
      )
      case ToolType.SPEECH:
        return (
          <div className='flex justify-center'>
            <audio controls src={blob} />
          </div>
        )
      default:
        console.log('UNCATCHED CONDITION!');
        break;
  }
}

export default GenerateOutput;