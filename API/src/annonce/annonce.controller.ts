import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from '../auth/guard/jwt-passport.guard';
import { AnnonceService } from './annonce.service';
import { CreateAnnonceDto } from './dto/create-annonce.dto';
import { UpdateAnnonceDto } from './dto/update-annonce.dto';
import { get } from 'http';

@Controller('annonce')
export class AnnonceController {
  constructor(private readonly annonceService: AnnonceService) {}

  
  @Post()
  createAnnonce(@Body() createAnnonceDto: CreateAnnonceDto) {
    return this.annonceService.createAnnonce(createAnnonceDto);
  }

  @Get()
  findAll() {
    return this.annonceService.findAll();
  }

  @Get('user/:id')
  findAllByUserId(@Param('id') id: string) {
    return this.annonceService.findAllByUserId(+id);
  }

  @Get('decorateur/:id')
  findAllByDecoratorId(@Param('id') id: string) {
    return this.annonceService.findAllByDecoratorId(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.annonceService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAnnonceDto: UpdateAnnonceDto) {
    return this.annonceService.update(+id, updateAnnonceDto);
  }

  @Delete(':id')
  softDeleteAnnonce(@Param('id') id: string) {
    return this.annonceService.softDeleteAnnonce(+id);
  }

  @Get(':id/messages')
  findMessages(@Param('id') id: string) {
    return this.annonceService.findMessages(+id);
  }
}
