export class CreateProfileDto {
  id: number;
  name: string;
  username: string;
  role: string;
}

export class UpdateProfileDto {
  id: number;
  name?: string;
  username?: string;
  role?: string;
}
