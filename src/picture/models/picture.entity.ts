import { AlbumEntity } from "../../album/models/album.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("picture")
export class PictureEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  externalPublicId: string;

  @Column()
  externalId: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  // @Column({ array: true })
  // tags: string[];

  @Column({ default: false })
  isQuality: boolean;

  @Column({ nullable: true })
  date?: string;

  @Column()
  height: number;

  @Column()
  width: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @ManyToOne(() => AlbumEntity, (albumEntity) => albumEntity.pictures, {
    nullable: true,
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    orphanedRowAction: "delete",
  })
  album: AlbumEntity;
}
