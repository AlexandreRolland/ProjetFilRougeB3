import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from './entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private messageRepository: Repository<MessageEntity>,
  ) {}

  //post a new message and link it to the right annonce and user with ids

  async postMessage(id, createMessageDto: CreateMessageDto) {
    try {
      const message = await this.messageRepository.create(createMessageDto);
      message.annonce = id;
      console.log(message);
      await this.messageRepository.save(message);
      console.log(message);
      return message;
    } catch (error) {
      throw new UnauthorizedException('Error creating message' + error);
    }
  }

  async findAll() {
     return await this.messageRepository.createQueryBuilder('message')
      .leftJoinAndSelect('message.annonce', 'annonce')
      .leftJoinAndSelect('message.senderId', 'user')
      .orderBy('message.id', 'DESC')
      .getMany();


  }

}
