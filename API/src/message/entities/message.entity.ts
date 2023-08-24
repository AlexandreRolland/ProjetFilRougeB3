import { AnnonceEntity } from "../../annonce/entities/annonce.entity";
import { TimeStamp } from "../../timestamp/timestamp.entity";
import { UserEntity } from "../../user/entities/user.entity";
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
