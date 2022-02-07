import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile, ProfileDocument } from './profile.model';

@Injectable()
export class ProfilesService {

  constructor(
    @InjectModel('Profile') private readonly profileModel: Model<ProfileDocument>) { }

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const createdProfile = new this.profileModel(createProfileDto);
    console.log(createProfileDto);
    console.log(createdProfile);
    return createdProfile.save();
  }

  async findAll(): Promise<Profile[]> {
    return await this.profileModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
