export enum ToolType {
  TEXT_TO_IMAGE='text-to-image',
  TEXT_TO_SPEECH='text-to-speech',
  IMAGE_TO_TEXT='image-to-text'
}

export interface ITool {
  toolName: ToolType | string
}

export interface IGenerateOutput extends ITool {
  blob: string | undefined
  data: string | FileList | null
}