import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileEntity } from './entities/profile.entity';

@Injectable()
export class ProfileService {
constructor(
    @InjectRepository(ProfileEntity)
    private profileRepository: Repository<ProfileEntity>,
) {}

async create(createProfileDto: CreateProfileDto) {
    try{
        const profile = await this.profileRepository.create(createProfileDto);
        await this.profileRepository.save(profile);
        return profile;
    }
    catch(error){
        throw new Error('Error creating profile')
    }
}

async findAll() {
    try{
        return await this.profileRepository.find();
    }
    catch(error){
        throw new Error('Error finding profiles')
    }
}

async findOne(id: number) {
    try{
        return await this.profileRepository.findOneBy({id});
    }
    catch(error){
        throw new Error('Error finding profile')
    }
}

async update(id: number, updateProfileDto: UpdateProfileDto) {
 try{
    const profile = await this.profileRepository.findOneBy({id});
    const profileUpdate = { ...profile, ...updateProfileDto };
    await this.profileRepository.save(profileUpdate);

    return profileUpdate;
 }
 catch(error){
    throw new Error('Error updating profile')
 }
}

async softDeleteProfile(id: number) {
    try{
        return await this.profileRepository.softDelete(id);
    }
    catch(error){
        throw new Error('Error deleting profile')
    }
}
}
