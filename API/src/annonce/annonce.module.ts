import { Module } from '@nestjs/common';
import { AnnonceService } from './annonce.service';
import { AnnonceController } from './annonce.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnonceEntity } from './entities/annonce.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnnonceEntity])],
  controllers: [AnnonceController],
  providers: [AnnonceService],
  exports: [AnnonceService]
})
export class AnnonceModule {}
