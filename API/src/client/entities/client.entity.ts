import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AnnonceEntity } from "../../annonce/entities/annonce.entity";
import { UserEntity } from "../../user/entities/user.entity";

@Entity("client")
export class ClientEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, user => user.client )
    @JoinColumn()
    user: UserEntity;

    @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;


}
