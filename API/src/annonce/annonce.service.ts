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
        relations: ['user'],
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
      .where('user.id = :id', { id })
      .orderBy('annonce.id', 'DESC') 
      .getMany();
    }
    catch(error){
      throw new NotFoundException('Error finding annonce');
    }
  }

  async findOne(id: number) {
    try{
      return await this.annonceRepository.findOneBy({id});
    }
    catch(error){
      throw new NotFoundException('Error finding annonce')
    }
  }

  async update(id: number, updateAnnonceDto: UpdateAnnonceDto) {
    try{
      await this.annonceRepository.update(id, updateAnnonceDto);
      const annonce = await this.annonceRepository.findOneBy({id});
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
}