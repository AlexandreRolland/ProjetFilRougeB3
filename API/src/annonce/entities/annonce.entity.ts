import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { ClientEntity } from "../../client/entities/client.entity";

@Entity("annonce")
export class AnnonceEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roomType: string;

    @Column()
    roomSurface: number;

    @Column( {nullable: true})
    photos: string;

    @Column()
    description: string;

    @ManyToOne(() => ClientEntity, client => client.annonces, {
        cascade: true
        })
    @JoinTable()
    client: ClientEntity;

    @Column()
    price: number;

}
