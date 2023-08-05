import { AnnonceEntity } from "src/annonce/entities/annonce.entity";
import { TimeStamp } from "src/timestamp/timestamp.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("message")
export class MessageEntity extends TimeStamp {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, user => user.messages)
    @JoinTable()
    senderId: UserEntity;

    @ManyToOne(() => AnnonceEntity, annonce => annonce.messages)
    annonce: AnnonceEntity;

    @Column()
    content: string;
}
