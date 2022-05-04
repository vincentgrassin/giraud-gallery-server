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

  @Column()
  description: string;

  // @Column({ array: true })
  // tags: string[];

  @Column({ default: false })
  isQuality: boolean;

  @Column()
  date: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @ManyToOne(() => AlbumEntity, (albumEntity) => albumEntity.pictures)
  album: AlbumEntity;
}
