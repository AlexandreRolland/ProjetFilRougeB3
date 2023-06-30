import { Column, Entity, JoinTable, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";
import { TimeStamp } from "../../timestamp/timestamp.entity";

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

    @Column()
    price: number;

}
