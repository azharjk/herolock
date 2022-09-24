import { IsNotEmpty, IsString } from 'class-validator';
import { CreateArticle } from '../types/create-article';

export class CreateArticleBody implements CreateArticle {
  @IsNotEmpty()
  @IsString()
  content: string;
}
