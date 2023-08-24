import { AnnonceStatus } from "../entities/annonce.entity";

export class CreateAnnonceDto {
    roomType: string;
    roomSurface: number;
    photos?: string;
    description: string;
    price: number;
    status?: AnnonceStatus;
}
