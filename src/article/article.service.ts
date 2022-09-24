import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { CommonArticle } from './types/common-article';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  findMany() {
    return this.articleRepository.find();
  }

  findOne(id: number) {
    return this.articleRepository.findOneBy({
      id,
    });
  }

  create(article: CommonArticle) {
    return this.articleRepository.save(article);
  }

  update(id: number, article: CommonArticle) {
    return this.articleRepository.update(
      {
        id,
      },
      article,
    );
  }

  delete(id: number) {
    return this.articleRepository.delete({
      id,
    });
  }
}
