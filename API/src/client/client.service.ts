import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientEntity } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private clientRepository: Repository<ClientEntity>,
  ) {}

  async createClient(createClientDto: CreateClientDto) {
    try{
      const client = await this.clientRepository.create(createClientDto);
      await this.clientRepository.save(client);
      return client;
    }
    catch(error){
      throw new Error('Error creating client')
    }
  }

  async findAll() {
    try{
      return await this.clientRepository.find();
    }
    catch(error){
      throw new Error('Error finding clients')
    }
  }

  async findOne(id: number) {
    try{
      return await this.clientRepository.findOneBy({id});
    }
    catch(error){
      throw new Error('Error finding client')
    }
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    try{
      const client = await this.clientRepository.findOneBy({id});
      const clientUpdate = { ...client, ...updateClientDto };
      await this.clientRepository.save(clientUpdate);

      return clientUpdate;
    }
    catch(error){
      throw new Error('Error updating client')
    }
  }

  async softDeleteClient(id: number) {
    try{
      return await this.clientRepository.softDelete(id);
    }
    catch(error){
      throw new Error('Error deleting client')
    }
  }
}
