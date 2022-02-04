/* eslint-disable prettier/prettier */
import { CreateProfileDto, UpdateProfileDto } from './../../dtos/profiles.dto';
import { Controller, Get, Post, Param, Body, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Response } from 'express';

@Controller('profiles')
export class ProfilesController {

  @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto, @Res() res: Response){
      console.log(createProfileDto);
      res.status(HttpStatus.CREATED).send();
      return 'This action adds a new profile';
  }

  @Get()
  getProfiles(@Res() res: Response): Observable<any[]> {
    console.log('This action returns all profiles');
    res.status(HttpStatus.OK).json([]);
    return of([]);
  }

  @Get(':id')
  getProfile(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Put(':id')
  updateProfile(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto){
    console.log(updateProfileDto);
    return `This action updates  a ${id} cat`;
  }
  
  @Delete(':id')
  deleteProfile(@Param('id') id: string) {
      return `This action remove a ${id} profile`;
  }
}
