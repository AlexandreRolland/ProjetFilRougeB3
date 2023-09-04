import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    title?: string;
    category?: string;
    subhead?: string;
    content?: string;
    image?: string;
    subhead2?: string;
    content2?: string;
    image2?: string;
}
