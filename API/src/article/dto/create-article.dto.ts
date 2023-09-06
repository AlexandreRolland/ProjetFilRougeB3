import { ArticleCategory } from "../entities/article.entity";

export class CreateArticleDto {
    title: string;
    category: ArticleCategory;
    subhead?: string;
    content: string;
    image: string;
    subhead2?: string;
    content2?: string;
    image2?: string;
}
