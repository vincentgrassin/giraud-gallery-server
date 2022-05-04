import { PictureEntity } from "src/picture/models/picture.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("album")
export class AlbumEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column()
  name: string;

  @Column()
  technicalName: string;

  @Column()
  date?: string;

  @OneToMany(() => PictureEntity, (pictureEntity) => pictureEntity.album)
  pictures: PictureEntity[];
}
