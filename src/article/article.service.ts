import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { CreateArticle } from './types/create-article';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  findMany() {
    return this.articleRepository.find();
  }

  create(article: CreateArticle) {
    const articleEntity = this.articleRepository.create(article);
    return this.articleRepository.save(articleEntity);
  }
}
