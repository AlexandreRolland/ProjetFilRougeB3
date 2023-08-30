import { DecorateurEntity } from "src/decorateur/entities/decorateur.entity";
import { TimeStamp } from "src/timestamp/timestamp.entity";
import { Column, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class ArticleEntity extends TimeStamp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column( {nullable: true})
    image: string;

    @ManyToOne(() => DecorateurEntity, (decorateur) => decorateur.articles)
    decorateur: DecorateurEntity;
}
