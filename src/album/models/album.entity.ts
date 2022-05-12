import { PictureEntity } from "src/picture/models/picture.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("album")
export class AlbumEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column()
  name: string;

  @Column()
  publicId: string;

  @Column()
  numberId: string;

  @Column()
  date?: string;

  @OneToMany(() => PictureEntity, (pictureEntity) => pictureEntity.album, {
    nullable: true,
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    orphanedRowAction: "delete",
  })
  pictures?: PictureEntity[];

  @OneToOne(() => PictureEntity)
  @JoinColumn()
  coverPicture: PictureEntity;
}
