import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, Relation } from 'typeorm';
import { Review } from './Review';
import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookId: string;

  @Column({ unique: true })
  bookTitle: string;

  @Column({ unique: false, nullable: true })
  yearPublished: number;

  @Column({ default: false })
  publicDomain: boolean;

  @OneToMany(() => Review, (review) => review, { cascade: true })
  review: Relation<Review>[];
  
  @ManyToMany(() => Author, (author) => author, { cascade: true })
  author: Relation<Author>[];
}
