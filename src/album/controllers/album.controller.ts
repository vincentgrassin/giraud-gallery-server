import { Body, Controller, Post } from "@nestjs/common";
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
}
