export enum ToolType {
  TEXT_TO_IMAGE='text-to-image',
  TEXT_TO_SPEECH='text-to-speech',
  IMAGE_TO_TEXT='image-to-text',
  SUMMARIZATION='summarization'
}

export interface ITool {
  toolName: ToolType | string
}

export interface IGenerateOutput extends ITool {
  blob: string | undefined
  data: string | FileList | null
}

export type APIResponseType = {
  [key: string]: FileList | string | boolean;
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
}