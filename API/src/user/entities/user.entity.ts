import { PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { ProfileEntity } from "../../profile/entities/profile.entity";
import { ClientEntity } from "../../client/entities/client.entity";
import { DecorateurEntity } from "../../decorateur/entities/decorateur.entity";


@Entity("user")
export class UserEntity {
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

    @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

}
