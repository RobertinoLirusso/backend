import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Club } from './club.entity';
import { ClubService } from './club.service';

@Controller('club')
export class ClubController {

    constructor(private readonly clubService: ClubService) {}

    @Get()
    findAll(): Promise<Club[]> {
      return this.clubService.findAllClubs();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Club> {
      return this.clubService.findOne(id);
    }

    @Post('create')
    createClub(@Body() clubData: Partial<Club>): Promise<Club> {
      return this.clubService.createClub(clubData);

    }

    @Put('edit/:id')
    editClub(@Param('id') id: number, @Body() clubData: Partial<Club>): Promise<Club> {
      return this.clubService.editClub(id,clubData);
    }

    @Delete('delete/:id') 
    removeClub(@Param('id') id: number): Promise<void> {
      return this.clubService.remove(id)
    }


}
