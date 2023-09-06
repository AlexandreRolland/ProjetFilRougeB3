import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post(':id')
  create(@Param('id') id: string, @Body() createMessageDto: CreateMessageDto) {
    return this.messageService.postMessage(+id, createMessageDto);
  }


  @Get()
  findAll() {
    return this.messageService.findAll();
  }

}
