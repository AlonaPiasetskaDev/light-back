import { Injectable } from '@nestjs/common';
import { IProfile } from 'src/interfaces/profile.interface';

@Injectable()
export class ProfilesService {
  private readonly profiles: IProfile[] = [];

  createProfile(profile: IProfile) {
    this.profiles.push(profile);
  }

  getProfiles(): IProfile[] {
    return this.profiles;
  }
}
