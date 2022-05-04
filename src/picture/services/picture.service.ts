import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { firstValueFrom, map, tap, Observable, from } from "rxjs";
import { Repository } from "typeorm";
import { PictureEntity } from "../models/picture.entity";
import { Picture } from "../models/picture.interface";

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(PictureEntity)
    private readonly pictureRepository: Repository<PictureEntity> // private httpService: HttpService
  ) {}

  createPicture(picture: Picture): Observable<Picture> {
    return from(this.pictureRepository.save(picture));
  }
}
