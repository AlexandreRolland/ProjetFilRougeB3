import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleCategory, ArticleEntity } from './entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private articleRepository: Repository<ArticleEntity>,
){}

  async createArticle(createArticleDto: CreateArticleDto) {
    try{
      const article = await this.articleRepository.create(createArticleDto);
      await this.articleRepository.save(article);

      return article;
    }
    catch(error){
      throw new UnauthorizedException('Error creating article' + error)
    }
  }

  async findAll() {
    try{
      return await this.articleRepository.find({
        order: {
          createdAt: 'DESC',
        },
      })
    }
    catch(error){
      throw new UnauthorizedException('Error finding article' + error)
    }
  }
  // findAllByCategory by category wich is an enum
  async findAllByCategory(categoryName: string) {
    try{
      return await this.articleRepository.find({
        where: { category: categoryName as ArticleCategory },
        order: {
          createdAt: 'DESC',
        },
      })
    }
    catch(error){
      throw new UnauthorizedException('Error finding article' + error)
    }
  }


 async findOne(id: number) {
    try{
      return await this.articleRepository.findOneBy({id});
    }
    catch(error){
      throw new UnauthorizedException('Error finding article' + error)
    }
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    try{
      await this.articleRepository.update(id, updateArticleDto);
      const article = await this.findOne(id);
      return article;
    }
    catch(error){
      throw new UnauthorizedException('Error updating article' + error)
    }
  }

 async remove(id: number) {
    try{
      return await this.articleRepository.softDelete({id});
    }
    catch(error){
      throw new UnauthorizedException('Error deleting article' + error)
    }
 }
}
