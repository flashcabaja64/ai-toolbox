export enum ToolType {
  IMAGE='image',
  SPEECH='speech'
}

export interface ITool {
  toolName: ToolType
}

export interface IGenerateOutput extends ITool {
  blob: string | undefined
  text: string
}