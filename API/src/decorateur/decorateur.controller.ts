import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DecorateurService } from './decorateur.service';
import { CreateDecorateurDto } from './dto/create-decorateur.dto';
import { UpdateDecorateurDto } from './dto/update-decorateur.dto';
import { ParseIntPipe } from '@nestjs/common';


@Controller('decorateur')
export class DecorateurController {
  constructor(private readonly decorateurService: DecorateurService) {}

  @Post()
  createDecorateur(@Body() createDecorateurDto: CreateDecorateurDto) {
    return this.decorateurService.createDecorateur(createDecorateurDto);
  }

  @Get()
  findAll() {
    return this.decorateurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.decorateurService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDecorateurDto: UpdateDecorateurDto) {
    return this.decorateurService.update(id, updateDecorateurDto);
  }

  @Delete(':id')
  softDeletedecorateur(@Param('id', ParseIntPipe) id: number) {
    return this.decorateurService.softDelete(id);
  }
}
