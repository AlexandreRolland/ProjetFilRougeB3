import { Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "src/Generic/timestamp.entity";
import { AnnonceEntity } from "src/annonce/entities/annonce.entity";
import { UserEntity } from "src/user/entities/user.entity";

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
