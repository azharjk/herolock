import { IsNotEmpty, IsString } from 'class-validator';
import { CommonArticle } from '../types/common-article';

export class CommonArticleBody implements CommonArticle {
  @IsNotEmpty()
  @IsString()
  content: string;
}
