import { IsNumber, IsOptional, IsString } from "class-validator"

export class TimeBlockDto {
  @IsString()
  @IsOptional()
  name: string

  @IsString()
  @IsOptional()
  color?: string

  @IsNumber()
  duration: number 

  @IsNumber()
  @IsOptional()
  order: number    
}