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
  async findAllByCategory(category: ArticleCategory) {
    try{
      return await this.articleRepository.find({
        where: { category },
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

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
