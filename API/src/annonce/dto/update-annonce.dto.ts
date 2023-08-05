import { PartialType } from '@nestjs/mapped-types';
import { CreateAnnonceDto } from './create-annonce.dto';
import { DecorateurEntity } from 'src/decorateur/entities/decorateur.entity';
import { MessageEntity } from 'src/message/entities/message.entity';

export class UpdateAnnonceDto extends PartialType(CreateAnnonceDto) {
    roomType?: string;
    roomSurface?: number;
    photos?: string;
    descritpion?: string;
    prix?: number;
    decorateur?: DecorateurEntity;
}
