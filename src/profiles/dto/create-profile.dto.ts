import { ApiProperty } from "@nestjs/swagger";

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}


export class CreateProfileDto {

  username: string;
  email: string;

  @ApiProperty({ description: 'User Age', default: null })
  age?: number;

  @ApiProperty({ enum: ['Male', 'Female'], description: "ONLY 2 GENDER EXISTS!" })
  gender?: Gender;

  avatar?: string;
}
