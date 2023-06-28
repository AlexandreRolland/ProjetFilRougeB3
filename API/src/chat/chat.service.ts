
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatEntity } from './entities/chat.entity';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepository: Repository<ChatEntity>,
  ) {}

  async create(createChatDto: CreateChatDto): Promise<ChatEntity> {
    const newChat = this.chatRepository.create({
      client: { id: createChatDto.clientId },
      decorateur: { id: createChatDto.decorateurId },
      annonce: { id: createChatDto.annonceId },
    });

    return this.chatRepository.save(newChat);
  }

  findAll() {
    return `This action returns all chat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
