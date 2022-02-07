import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";

import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile, ProfileSchema, ProfileDocument } from './profile.model';

@ApiTags('Profiles')
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) { }

  @Post('/')
  @ApiResponse({ status: 201, type: Profile, description: 'Create Profile' })
 async  create(@Body() createProfileDto: CreateProfileDto, @Res() res): Promise<Profile> {
    const created = await this.profilesService.create(createProfileDto);
    return res.status(HttpStatus.CREATED).json(created)
  }

  @Get('/')
  @ApiResponse({ status: 200, type: [Profile], description: 'List Profiles' })
  async findAll(@Res() res): Promise<Profile[]> {
    const allProfiles = await this.profilesService.findAll();
    console.log(allProfiles);
    return res.status(HttpStatus.OK).json(allProfiles)
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(+id);
  }

  @Patch(':id/')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(+id, updateProfileDto);
  }

  @Delete(':id/')
  remove(@Param('id') id: string) {
    return this.profilesService.remove(+id);
  }
}
