import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlbumEntity } from "../../album/models/album.entity";
import { PictureService } from "../../picture/services/picture.service";
import { PictureController } from "../controllers/picture.controller";
import { PictureEntity } from "../models/picture.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AlbumEntity, PictureEntity])],
  providers: [PictureService],
  controllers: [PictureController],
})
export class PictureModule {}
