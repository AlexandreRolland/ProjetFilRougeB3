import { AnnonceRoomType, AnnonceStatus } from "../entities/annonce.entity";

export class CreateAnnonceDto {
    roomType: AnnonceRoomType;
    roomSurface: number;
    photos?: string;
    description: string;
    price: number;
    status?: AnnonceStatus;
}
