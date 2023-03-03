import { Injectable } from '@nestjs/common';
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
      throw new Error('Error creating annonce' + error)
    }
  } 

  async findAll() {
    try{
      return await this.annonceRepository.find();
    }
    catch(error){
      throw new Error('Error finding annonces')
    }
  }

  async findOne(id: number) {
    try{
      return await this.annonceRepository.findOneBy({id});
    }
    catch(error){
      throw new Error('Error finding annonce')
    }
  }

  async update(id: number, updateAnnonceDto: UpdateAnnonceDto) {
    try{
      const annonce = await this.annonceRepository.findOneBy({id});
      const annonceUpdate = { ...annonce, ...updateAnnonceDto };
      await this.annonceRepository.save(annonceUpdate);
      
      return annonceUpdate;
    }
    catch(error){
      throw new Error('Error updating annonce')
    }
  }

  async softDeleteAnnonce(id: number) {
    try{
      return await this.annonceRepository.softDelete(id);
    }
    catch(error){
      throw new Error('Error deleting annonce')
    }
  }

}
