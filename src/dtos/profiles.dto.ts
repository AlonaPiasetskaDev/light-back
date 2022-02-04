export class CreateProfileDto {
  id: number;
  name: string;
  username: string;
  role: string;
}

export class UpdateProfileDto {
  name?: string;
  username?: string;
}
