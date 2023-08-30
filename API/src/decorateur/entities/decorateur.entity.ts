import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";
import { TimeStamp } from "../../timestamp/timestamp.entity";
import { AnnonceEntity } from "../../annonce/entities/annonce.entity";
import { ArticleEntity } from "../../article/entities/article.entity";


@Entity("decorateur")
export class DecorateurEntity extends TimeStamp{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, user => user.decorateur)
    @JoinColumn()
    user: UserEntity;

    @Column({nullable: true})
    diplome: string;

    @Column({nullable: true})
    experience: string;

    @Column({default: 0,
            nullable:true})
    solde: number;

    @OneToMany(() => AnnonceEntity, annonce => annonce.decorateur)
    annonces: AnnonceEntity[];

    @OneToMany(() => ArticleEntity, article => article.decorateur)
    articles: ArticleEntity[];


}
