import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation } from 'typeorm';
import { Review };

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  authorId: string;

  @Column({ unique: false })
  authorName: string;
  
  @Column({ unique: false, default: 'unknown' })
  countryOrgin: string;

  @ManyToMany(() => Book, (book) => book.bookId, { cascade: true })
  books: Relation<Book>[];
}
