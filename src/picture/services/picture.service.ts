import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { initialDatabase } from "initialDatabase";
import { firstValueFrom, map, tap, Observable, from } from "rxjs";
import { AlbumEntity } from "src/album/models/album.entity";
import { Repository } from "typeorm";
import { PictureEntity } from "../models/picture.entity";
import { Picture } from "../models/picture.interface";

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(PictureEntity)
    private readonly pictureRepository: Repository<PictureEntity>, // private httpService: HttpService,
    @InjectRepository(AlbumEntity)
    private readonly albumRepository: Repository<AlbumEntity>
  ) {}

  createPicture(picture: Picture): Observable<Picture> {
    return from(this.pictureRepository.save(picture));
  }

  uploadData(): boolean {
    //TODO: add config to procted route
    // autres routes

    const albums = Object.keys(initialDatabase);
    albums.forEach(async (albumKey) => {
      console.log("uploading to database", albumKey);
      const album = initialDatabase[albumKey];
      // const pictures: PictureEntity[] = [];
      let coverPicture: PictureEntity;
      const newAlbum = await this.albumRepository.save({
        name: album.name,
        publicId: album.id,
        numberId: album.number,
        date: album.date,
        // pictures: pictures,
      });
      const albumPictures = initialDatabase[albumKey].pictures;

      await Promise.all(
        albumPictures.map(async (picture) => {
          const newPicture = await this.pictureRepository.save({
            album: newAlbum,
            name: picture.description,
            isQuality: picture.isQuality,
            externalPublicId: picture.cloudinaryPublicId,
            externalId: picture.cloudinaryId,
            height: picture.height,
            width: picture.width,
            tags: picture.tags,
          });
          // if (newPicture) {
          //   pictures.push(newPicture);
          // }
          if (picture.isCover) {
            coverPicture = newPicture;
          }
        })
      );
      this.albumRepository.save({
        ...newAlbum,
        coverPicture,
        // ,pictures
      });
    });

    return true;
  }
}
