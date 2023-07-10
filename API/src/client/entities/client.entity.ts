import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AnnonceEntity } from "../../annonce/entities/annonce.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { TimeStamp } from "src/timestamp/timestamp.entity";


@Entity("client")
export class ClientEntity extends TimeStamp{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, user => user.client )
    @JoinColumn()
    user: UserEntity;
}
