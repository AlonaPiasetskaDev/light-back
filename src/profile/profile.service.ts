import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from './interfaces/profile.interface';
import { CreateProfileDto } from './dto/profile.dto';

@Injectable()
export class ProfileService {
  
  constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>) {}

  async getProfiles(): Promise<Profile[]> {
    return await this.profileModel.find();
  }

  async getProfile(profileId: string): Promise<Profile> {
    return await this.profileModel.findById(profileId);
  }
  
  async createProfile(createProfileDto: CreateProfileDto): Promise<Profile> {
    const newProfile = new this.profileModel(createProfileDto);
    return await newProfile.save();
  }

  async deleteProfile(profileId: string): Promise<Profile> {
    return await this.profileModel.findByIdAndDelete(profileId);
  }
  
  async updateProfile(profileId: string, createProfileDto: CreateProfileDto): Promise<Profile> {
    return await this.profileModel.findByIdAndUpdate(profileId, createProfileDto, { new: true });
  }
}
