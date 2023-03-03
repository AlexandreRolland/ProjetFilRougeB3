import { Column, Entity, JoinTable, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import { Timestamp } from "src/Generic/timestamp.entity";
import { ClientEntity } from "src/client/entities/client.entity";

@Entity("annonce")
export class AnnonceEntity extends Timestamp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roomType: string;

    @Column()
    roomSurface: number;

    @Column()
    photos: string;

    @Column()
    description: string;

    @ManyToOne(() => ClientEntity, client => client.annonces, {
        cascade: true
        })
    @JoinTable()
    client: ClientEntity;

    @Column()
    prix: number;
}
