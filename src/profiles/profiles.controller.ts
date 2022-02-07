import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";

import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './profile.model';

@Controller('users')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) { }

  @Get(':userId/profiles')
  @ApiResponse({ status: 200, type: [Profile], description: 'List Users Profiles' })
  findAll(@Param('userId') userId: string, @Res() res) {
    const allProfiles = this.profilesService.findAll();
    return res.status(HttpStatus.OK).json(allProfiles)
  }

  @Get(':userId/profiles/:id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(+id);
  }

  @Patch(':userId/profiles/:id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(+id, updateProfileDto);
  }

  @Delete(':userId/profiles/:id')
  remove(@Param('id') id: string) {
    return this.profilesService.remove(+id);
  }
}
