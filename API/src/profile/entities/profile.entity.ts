import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";

@Entity("profile")
export class ProfileEntity {
@PrimaryGeneratedColumn()
id: number;

@Column()
firstName: string;

@Column()
lastName: string;

@OneToOne(() => UserEntity, user => user.profile)
@JoinColumn()
user: UserEntity;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updatedAt: Date;

@DeleteDateColumn()
deletedAt: Date;
}
