import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "src/Generic/timestamp.entity";
import { UserEntity } from "src/user/entities/user.entity";


@Entity("decorateur")
export class DecorateurEntity extends Timestamp{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, user => user.decorateur)
    @JoinColumn()
    user: UserEntity;

    @Column()
    diplome: string;

    @Column()
    experience: string;

    @Column()
    solde: number;

}