import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';
import { ArticleCategory } from '../entities/article.entity';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    title?: string;
    category?: ArticleCategory;
    subhead?: string;
    content?: string;
    image?: string;
    subhead2?: string;
    content2?: string;
    image2?: string;
}
