import { IsNotEmpty, IsNumberString } from 'class-validator';

export class IdArticleParam {
  @IsNotEmpty()
  @IsNumberString()
  id: number;
}
