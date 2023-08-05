import { Injectable } from '@nestjs/common';
import { NotFoundException, UnauthorizedException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnnonceDto } from './dto/create-annonce.dto';
import { UpdateAnnonceDto } from './dto/update-annonce.dto';
import { AnnonceEntity } from './entities/annonce.entity';

@Injectable()
export class AnnonceService {
  constructor(
    @InjectRepository(AnnonceEntity)
    private annonceRepository: Repository<AnnonceEntity>,
  ) {}

  async createAnnonce(createAnnonceDto: CreateAnnonceDto) {
    try{
      const annonce = await this.annonceRepository.create(createAnnonceDto);
      await this.annonceRepository.save(annonce);
      return annonce;
    }
    catch(error){
      throw new UnauthorizedException('Error creating annonce' + error)
    }
  } 

  async findAll() {
    try{
      return await this.annonceRepository.find({
        relations: ['user','decorateur', 'messages'],
        order: {
          id: 'DESC', 
        },
      });
    }
    catch(error){
      throw new NotFoundException('Error finding annonce');
    }
  }

  async findAllByUserId(id: number) {
    try{
      return await this.annonceRepository.createQueryBuilder('annonce')
      .leftJoinAndSelect('annonce.user', 'user')
      .leftJoinAndSelect('annonce.decorateur', 'decorateur')
      .where('user.id = :id', { id })
      .orderBy('annonce.id', 'DESC') 
      .getMany();
    }
    catch(error){
      throw new NotFoundException('Error finding annonce');
    }
  }

  async findAllByDecoratorId(id: number) {
    try {
        return await this.annonceRepository.createQueryBuilder('annonce')
            .leftJoinAndSelect('annonce.decorateur', 'decorateur')
            .leftJoinAndSelect('annonce.user', 'user')
            .where('decorateur.id = :id', { id })
            .orderBy('annonce.id', 'DESC') 
            .getMany();
    }
    catch(error) {
        throw new NotFoundException('Error finding annonce');
    }
}

  async findOne(id: number) {
    try{
      return await this.annonceRepository.createQueryBuilder('annonce')
      .leftJoinAndSelect('annonce.user', 'user')
      .leftJoinAndSelect('annonce.decorateur', 'decorateur')
      .where('annonce.id = :id', { id })
      .getOne();
    }
    catch(error){
      throw new NotFoundException('Error finding annonce')
    }
  }

  async update(id: number, updateAnnonceDto: UpdateAnnonceDto) {
    try{
      await this.annonceRepository.update(id, updateAnnonceDto);
      const annonce = await this.findOne(id);
      return annonce;
    }
    catch(error){
      throw new UnauthorizedException(error)
    }
  }

  async softDeleteAnnonce(id: number) {
    try {
      await this.annonceRepository.softDelete({ id });
      return { deleted: true };
    } catch (error) {
      throw new UnauthorizedException(
        `Error deleting annonce: ${error.message}`,
        error.status,
      );
    }
  }
  
  async findMessages(id: number) {
    try{
      const annonce = await this.annonceRepository.createQueryBuilder('annonce')
      .leftJoinAndSelect('annonce.messages', 'messages')
      // Affiche également le user qui a posté le message
      .leftJoinAndSelect('messages.senderId', 'user')
      .leftJoinAndSelect('user.client', 'client')
      .leftJoinAndSelect('user.decorateur', 'decorateur')
      .where('annonce.id = :id', { id })
      .getOne();




      if (!annonce) {
        throw new NotFoundException('Annonce not found');
      }

      return annonce.messages;
    }
    catch(error){
      throw new NotFoundException('Error finding messages for annonce')
    }
  }
}