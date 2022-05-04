import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlbumService } from "../services/album.service";
import { AlbumController } from "../controllers/album.controller";
import { AlbumEntity } from "../models/album.entity";
import { PictureEntity } from "../../picture/models/picture.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AlbumEntity, PictureEntity])],
  providers: [AlbumService],
  controllers: [AlbumController],
})
export class AlbumModule {}
