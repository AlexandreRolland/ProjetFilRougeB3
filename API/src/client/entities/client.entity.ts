import { Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "../../Generic/timestamp.entity";
import { AnnonceEntity } from "../../annonce/entities/annonce.entity";
import { UserEntity } from "../../user/entities/user.entity";

@Entity("client")
export class ClientEntity extends Timestamp {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, user => user.client )
    @JoinColumn()
    user: UserEntity;

    @OneToMany(() => AnnonceEntity, annonce => annonce.client)
    @JoinColumn()
    annonces: AnnonceEntity[];


}
