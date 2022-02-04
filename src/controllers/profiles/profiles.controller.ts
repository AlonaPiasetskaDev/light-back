/* eslint-disable prettier/prettier */
import { CreateProfileDto, UpdateProfileDto } from './../../dtos/profiles.dto';
import { Controller, Get, Post, Param, Body, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Response } from 'express';
import { ProfilesService } from 'src/providers/profiles/profiles.service';
import { IProfile } from 'src/interfaces/profile.interface';

@Controller('profiles')
export class ProfilesController {


    constructor(private profilesService: ProfilesService){}

    @Post()
    async createProfile(@Body() createProfileDto:CreateProfileDto) {
        this.profilesService.createProfile(createProfileDto);
    }

    @Get()
    async getProfiles(): Promise<IProfile[]> {
        return this.profilesService.getProfiles()
    }
    // TODO: convert promise to observable





//   @Post()
//   createProfile(@Body() createProfileDto: CreateProfileDto, @Res() res: Response){
//       console.log(createProfileDto);
//       res.status(HttpStatus.CREATED).send();
//       return 'This action adds a new profile';
//   }

//   @Get()
//   getProfiles(@Res() res: Response): Observable<any[]> {
//     console.log('This action returns all profiles');
//     res.status(HttpStatus.OK).json([]);
//     return of([]);
//   }

//   @Get(':id')
//   getProfile(@Param() params): string {
//     console.log(params.id);
//     return `This action returns a #${params.id} cat`;
//   }

//   @Put(':id')
//   updateProfile(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto){
//     console.log(updateProfileDto);
//     return `This action updates  a ${id} cat`;
//   }
  
//   @Delete(':id')
//   deleteProfile(@Param('id') id: string) {
//       return `This action remove a ${id} profile`;
//   }
}
