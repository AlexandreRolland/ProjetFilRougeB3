import { Module } from '@nestjs/common';
import { DecorateurService } from './decorateur.service';
import { DecorateurController } from './decorateur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DecorateurEntity } from './entities/decorateur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DecorateurEntity])],
  controllers: [DecorateurController],
  providers: [DecorateurService]
})
export class DecorateurModule {}
