import { PartialType } from '@nestjs/mapped-types';
import { CreateAnnonceDto } from './create-annonce.dto';

export class UpdateAnnonceDto extends PartialType(CreateAnnonceDto) {
    roomType?: string;
    roomSurface?: number;
    photos?: string;
    descritpion?: string;
    // user?: number;
    prix?: number;
}
