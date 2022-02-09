import { Controller, Delete, Get, Post, Put, Body, Res, Param, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/profile.dto';
import { ProfileService } from './profile.service';
import { Profile } from './interfaces/profile.interface';
import { ApiBody, ApiExtraModels } from '@nestjs/swagger';

@Controller('profiles')
export class ProfileController {

  constructor(private profileService: ProfileService) { }

  @Get()
  async getProfiles(@Res() res): Promise<Profile[]> {
    const profiles = await this.profileService.getProfiles();
    return res.status(HttpStatus.OK).json(profiles);
  }

  @Get('/:id')
  async getProfile(@Param('id') profileId, @Res() res): Promise<Profile> {
    const profile = await this.profileService.getProfile(profileId)
    if (!profile) throw new NotFoundException('Profile does not exist!');
    return res.status(HttpStatus.OK).json(profile);
  }

  @Post('/')
  @ApiBody({
    description: 'Create Profile',
    type: CreateProfileDto,
  })
  async createProfile(@Body() createProfileDto: CreateProfileDto, @Res() res): Promise<Profile> {
    const profile = await this.profileService.createProfile(createProfileDto);
    return res.json({
      msg: 'Profile Created Successfully',
      profile
    });
  }

  @Delete('/:id')
  async deleteProfile(@Param('id') profileId, @Res() res): Promise<Profile> {
    const deletedProfile = await this.profileService.deleteProfile(profileId);
    if (!deletedProfile) throw new NotFoundException('Profile does not exist!');
    return res.json({
      msg: 'Profile Deleted Successfully',
      deletedProfile
    });
  }

  @Put('/:id')
  async updateProfile(@Param('id') profileId, @Body() createProfileDto: CreateProfileDto, @Res() res): Promise<Profile> {
    const updatedProfile = await this.profileService.updateProfile(profileId, createProfileDto);
    if (!updatedProfile) throw new NotFoundException('Profile does not exist!');
    return res.json({
      msg: 'Profile Updated Successfully',
      updatedProfile
    });
  }
}
