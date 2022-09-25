import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
  imports: [TypeOrmModule.forFeature([Article]), AuthenticationModule],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
