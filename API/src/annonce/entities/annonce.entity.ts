import { Column, Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";
import { TimeStamp } from "../../timestamp/timestamp.entity";
import { DecorateurEntity } from "../../decorateur/entities/decorateur.entity";
import { MessageEntity } from "../../message/entities/message.entity";

export enum AnnonceStatus {
    ON_HOLD = 'En Attente',
    EN_COURS = 'En Cours',
    ON_HOLDD = 'En Attente',
    IN_PROGRESS = 'En Cours',
    FINISHED = 'Terminé'
  }


@Entity("annonce")
export class AnnonceEntity extends TimeStamp{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({    
    type: 'enum',
    enum: AnnonceStatus,
    default: AnnonceStatus.ON_HOLD
    })
    status: AnnonceStatus;

    @Column()
    roomType: string;

    @Column()
    roomSurface: number;

    @Column( {nullable: true})
    photos: string;

    @Column()
    description: string;

    @ManyToOne(() => UserEntity, (user) => user.annonces)
    @JoinTable()
    user: UserEntity;
    
    @ManyToOne (()  => DecorateurEntity, (decorateur) => decorateur.annonces)
    decorateur: DecorateurEntity;

    @Column()
    price: number;

    @OneToMany(() => MessageEntity, message => message.annonce)
    messages: MessageEntity[];
    
}
