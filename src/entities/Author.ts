import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  authorId: string;

  @Column({ unique: false })
  authorName: string;

  @Column({ unique: false, default: 'unknown' })
  countryOrgin: string;

  @ManyToMany(() => Book, (book) => book.authors, { cascade: ['insert', 'update'] })
  books: Relation<Book>[];
}
