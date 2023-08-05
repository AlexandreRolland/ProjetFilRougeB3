import { PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToOne } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { ProfileEntity } from "../../profile/entities/profile.entity";
import { ClientEntity } from "../../client/entities/client.entity";
import { DecorateurEntity } from "../../decorateur/entities/decorateur.entity";
import { AnnonceEntity } from "../../annonce/entities/annonce.entity";
import { TimeStamp } from "src/timestamp/timestamp.entity";
import { MessageEntity } from "src/message/entities/message.entity";


@Entity("user")
export class UserEntity extends TimeStamp{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique: true, nullable: false})
    email: string;
    
    @Column()
    password: string;

    @Column({unique: true, nullable: true})
    username: string;

    @Column({default: "true"})
    professional: boolean;
    
    @OneToOne(() => ProfileEntity, profile => profile.user, {
        cascade: true
    })
    profile: ProfileEntity;
    
    @OneToOne(() => ClientEntity, client => client.user, {
        cascade: true
    })
    client: ClientEntity;

    @OneToOne(() => DecorateurEntity, decorateur => decorateur.user, {
        cascade: true
    })
    decorateur: DecorateurEntity;

    @OneToMany(() => AnnonceEntity, annonce => annonce.user, {
        cascade: true
    })
    annonces: AnnonceEntity[];

    @OneToMany(() => MessageEntity, message => message.senderId)
    messages: MessageEntity[];

}
