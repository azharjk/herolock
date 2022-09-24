import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CommonArticleBody } from './dto/common-article.body';
import { IdArticleParam } from './dto/id-article.param';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  findMany() {
    return this.articleService.findMany();
  }

  @Get(':id')
  findOne(@Param() param: IdArticleParam) {
    return this.articleService.findOne(param.id);
  }

  @Post()
  create(@Body() article: CommonArticleBody) {
    return this.articleService.create(article);
  }

  @Put(':id')
  update(@Param() param: IdArticleParam, @Body() article: CommonArticleBody) {
    return this.articleService.update(param.id, article);
  }

  @Delete(':id')
  delete(@Param() param: IdArticleParam) {
    return this.articleService.delete(param.id);
  }
}
