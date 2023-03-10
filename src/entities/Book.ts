import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation } from 'typeorm';
import { Review };

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookId: string;

  @Column({ unique: true })
  bookTitle: string;

  @Column({ unique: false, nullable: true })
  yearPublished: int;

  @Column({ default: false })
  publicDomain: boolean;

  @OneToMany(() => Review, (review) => review.reviewId, { cascade: true })
  members: Relation<Review>[];
}
