import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { Album } from "../models/album.interface";
import { AlbumService } from "../services/album.service";

@Controller("album")
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  create(@Body() album: Album): Observable<Album> {
    return this.albumService.createAlbum(album);
  }

  @Get("/all")
  getAlbums(): Observable<Album[]> {
    return this.albumService.getAlbums();
  }

  @Get("/:publicId")
  getPicture(@Param("publicId") publicId: string): Observable<Album> {
    return this.albumService.getAlbumById(publicId);
  }
}
