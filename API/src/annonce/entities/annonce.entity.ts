import { Column, Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";
import { TimeStamp } from "../../timestamp/timestamp.entity";
import { DecorateurEntity } from "src/decorateur/entities/decorateur.entity";
import { MessageEntity } from "src/message/entities/message.entity";


@Entity("annonce")
export class AnnonceEntity extends TimeStamp{
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
