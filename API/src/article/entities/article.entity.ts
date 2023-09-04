import { TimeStamp } from "../../timestamp/timestamp.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Repository } from "typeorm";

export enum ArticleCategory {
    NEWS = 'Actualites',
    TIPS = 'Conseils',
    TUTORIAL = 'Tutoriels'
}

@Entity("article")
export class ArticleEntity extends TimeStamp {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column( { nullable: true })
    subhead: string;

    @Column()
    content: string;

    @Column()
    image: string;

    @Column( { nullable: true })
    subhead2: string;

    @Column({ nullable: true })
    content2: string;

    @Column({ nullable: true })
    image2: string;

    @Column({
        type: 'enum',
        enum: ArticleCategory,
        default: ArticleCategory.TIPS
    })
    category: ArticleCategory;
}
