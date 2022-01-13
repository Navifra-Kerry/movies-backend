import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  imagepath: string;

  @IsOptional()
  @IsBoolean()
  status: boolean;
}
