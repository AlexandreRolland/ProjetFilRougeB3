import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Timestamp } from "src/Generic/timestamp.entity";
import { UserEntity } from "src/user/entities/user.entity";

@Entity("profile")
export class ProfileEntity extends Timestamp {
@PrimaryGeneratedColumn()
id: number;

@Column()
firstName: string;

@Column()
lastName: string;

@OneToOne(() => UserEntity, user => user.profile)
@JoinColumn()
user: UserEntity;
}
