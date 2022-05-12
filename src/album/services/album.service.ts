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

  getAlbumById(publicId: string): Observable<Album> {
    const album = this.albumRepository.findOne({
      where: { publicId: publicId },
      relations: ["pictures", "coverPicture"],
    });
    return from(album);
  }

  getAlbums(): Observable<Album[]> {
    const albums = this.albumRepository.find({
      relations: ["coverPicture"],
    });
    return from(albums);
  }
}
