export interface IAuthForm {
  email: string
  password: string
}

export interface IUser {
  id: string
  email: string 
  name?: string

  workInterval?: number  
  breakeInterval?: number 
  intervalCount?: number 
}

export interface IAuthResponse {
  accessToken: string
  user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & {password?: string}