import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleCategory } from './entities/article.entity';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/guard/roles.decorator';
import { JwtAuthGuard } from '../auth/guard/jwt-passport.guard';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('Admin')
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.createArticle(createArticleDto);
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Get('/category/:categoryName')
  findAllByCategory(@Param('categoryName') categoryName) {
    return this.articleService.findAllByCategory(categoryName);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }

  @Put(':id')
  updateArticle(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }
}
