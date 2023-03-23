import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";


@Entity("decorateur")
export class DecorateurEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, user => user.decorateur)
    @JoinColumn()
    user: UserEntity;

    @Column()
    diplome: string;

    @Column()
    experience: string;

    @Column()
    solde: number;

    @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

}