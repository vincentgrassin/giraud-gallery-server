import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable, from } from "rxjs";
import { Repository } from "typeorm";
import { AlbumEntity } from "../models/album.entity";
import { Album } from "../models/album.interface";

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(AlbumEntity)
    private readonly albumRepository: Repository<AlbumEntity>
  ) {}

  createAlbum(album: Album): Observable<Album> {
    return from(this.albumRepository.save(album));
  }
}
