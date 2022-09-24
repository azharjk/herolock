import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleBody } from './body/create-article.body';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  findMany() {
    return this.articleService.findMany();
  }

  @Post()
  create(@Body() article: CreateArticleBody) {
    return this.articleService.create(article);
  }
}
