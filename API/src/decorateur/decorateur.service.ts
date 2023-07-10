import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDecorateurDto } from './dto/create-decorateur.dto';
import { UpdateDecorateurDto } from './dto/update-decorateur.dto';
import { DecorateurEntity } from './entities/decorateur.entity';

@Injectable()
export class DecorateurService {
  constructor(
    @InjectRepository(DecorateurEntity)
    private decorateurRepository: Repository<DecorateurEntity>,
  ) {}

  async createDecorateur(createDecorateurDto: CreateDecorateurDto) {
    try{
      const decorateur = await this.decorateurRepository.create(createDecorateurDto);
      await this.decorateurRepository.save(decorateur);
      return decorateur;
    }
    catch(error){
      throw new Error('Error creating decorateur' + error)
    }
  }

  async findAll() {
    try{
      return await this.decorateurRepository.createQueryBuilder('decorateur')
        .leftJoinAndSelect('decorateur.user', 'user')
        .getMany();
    }
    catch(error){
      throw new Error('Error finding decorateurs')
    }
  }

  async findOne(id: number) {
    try{
      return await this.decorateurRepository.findOneBy({ id });
    }
    catch(error){
      throw new Error('Error finding decorateur')
    }
  }

  async update (id: number, updateDecorateurDto: UpdateDecorateurDto) {
    try{
      const decorateur = await this.decorateurRepository.findOneBy({id});
      const decorateurUpdate = { ...decorateur, ...updateDecorateurDto };
      await this.decorateurRepository.save(decorateurUpdate);

      return decorateurUpdate;
    }
    catch(error){
      throw new Error('Error updating decorateur')
    }
  }

  async softDelete(id: number) {
    try{
      return await this.decorateurRepository.softDelete(id);
    }
    catch(error){
      throw new Error('Error deleting decorateur' + error);
    }
  }
}