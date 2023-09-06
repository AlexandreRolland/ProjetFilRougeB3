import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private  userRepository: Repository<UserEntity>
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
      return await this.userRepository.save(createUserDto);
    } catch (error) {
      console.log(error);
      throw new Error('Error while creating user');
    }
  }

  async findAll() {
    return await this.userRepository.createQueryBuilder('user')
    .leftJoinAndSelect('user.annonces', 'annonces')
    .leftJoinAndSelect('user.client', 'client')
    .leftJoinAndSelect('user.decorateur', 'decorateur')
    .getMany();
  }

  async findOne(id: number) {
    return await this.userRepository.createQueryBuilder('user')
    .leftJoinAndSelect('user.annonces', 'annonces')
    .where('user.id = :id', { id })
    .getOne();
  }

  async findOneByEmail(email: string) : Promise<UserEntity> {
    return await this.userRepository.createQueryBuilder('user')
    .where('user.email = :email', { email })
    .leftJoinAndSelect('user.client', 'client')
    .leftJoinAndSelect('user.decorateur', 'decorateur')
    .getOne();
  }

async findOneById(id: number) {
  try{
    return await this.userRepository.findOneBy({id});
  }
  catch(error){
    throw new Error('Error while finding user');
  }
}

    
  async update(id: number, updateUserDto: UpdateUserDto) {

    try{
      const user = await this.userRepository.findOneBy({id});
      const userUpdate = { ...user, ...updateUserDto };
      await this.userRepository.save(userUpdate);
      
      return userUpdate;
    }
    catch(error){
      throw new Error('Error while updating user');
    }

  }

  async remove(id: number) {
    try{
      return await this.userRepository.softDelete({id});
    }
    catch(error){
      throw new Error('Error while deleting user');
    }
  }



}
