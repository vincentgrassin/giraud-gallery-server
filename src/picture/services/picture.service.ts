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
    console.log("data");
    console.log(initialDatabase);
    const albums = Object.keys(initialDatabase);

    albums.forEach((albumKey) => {
      // create and save picture
      // create and save album
      // const newAlbum: AlbumEntity = {
      //   name: albumKey,
      // };
      // this.albumRepository.save();
    });
    return true;
  }

  private createAllPictures(): boolean {
    console.log("data");
    return true;
  }
}
