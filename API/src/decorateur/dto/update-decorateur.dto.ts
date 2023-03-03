import { PartialType } from '@nestjs/mapped-types';
import { CreateDecorateurDto } from './create-decorateur.dto';

export class UpdateDecorateurDto extends PartialType(CreateDecorateurDto) {
    diplome?: string;
    experience?: string;
    solde?: number;
}
