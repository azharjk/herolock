import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('articles')
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;
}
