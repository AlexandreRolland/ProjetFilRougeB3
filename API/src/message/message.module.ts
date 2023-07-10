import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MessageController],
  providers: [MessageService]
})
export class MessageModule {}
