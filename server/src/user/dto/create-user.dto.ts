import { IsString } from 'class-validator';

export class UserDto {
  @IsString()
  userId: string;

  @IsString()
  password: string;

  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsString()
  roleType: string;
}
