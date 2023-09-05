import { Column, Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";
import { TimeStamp } from "../../timestamp/timestamp.entity";
import { DecorateurEntity } from "../../decorateur/entities/decorateur.entity";
import { MessageEntity } from "../../message/entities/message.entity";

export enum AnnonceStatus {
    ON_HOLD = 'En Attente',
    IN_PROGRESS = 'En Cours',
    FINISHED = 'Terminé'
  }

export enum AnnonceRoomType {
    CHAMBRE = 'chambre',
    CUISINE = 'cuisine',
    SALLE_DE_BAIN = 'salledebain',
    SALON = 'salon',
    BUREAU = 'bureau',
    AUTRE = 'autre'
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

    @Column({
    type: 'enum',
    enum: AnnonceRoomType,
    default: AnnonceRoomType.AUTRE
    })
    roomType: AnnonceRoomType;

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
