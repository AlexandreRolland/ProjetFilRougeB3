import { PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { Timestamp } from "../../Generic/timestamp.entity";
import { ProfileEntity } from "../../profile/entities/profile.entity";
import { ClientEntity } from "../../client/entities/client.entity";
import { DecorateurEntity } from "../../decorateur/entities/decorateur.entity";


@Entity("user")
export class UserEntity extends Timestamp {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique: true, nullable: false})
    email: string;
    
    @Column()
    password: string;
    
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

}
