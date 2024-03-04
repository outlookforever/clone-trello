import { IBase } from "./root.types"

export enum EnumTaskPriority {
  low = 'low',
  medium = 'medium',
  hight = 'hight'
}

export interface ITaskResponse extends IBase{
  name: string       
  priority?: EnumTaskPriority   
  isCompleted: boolean 
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updateAt'>>