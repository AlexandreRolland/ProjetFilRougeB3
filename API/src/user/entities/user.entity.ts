import { PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { Timestamp } from "src/Generic/timestamp.entity";
import { ProfileEntity } from "src/profile/entities/profile.entity";
import { ClientEntity } from "src/client/entities/client.entity";
import { DecorateurEntity } from "src/decorateur/entities/decorateur.entity";


@Entity("user")
export class UserEntity extends Timestamp {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
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
