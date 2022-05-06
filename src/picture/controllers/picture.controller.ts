import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { Picture } from "../models/picture.interface";
import { PictureService } from "../services/picture.service";

@Controller("picture")
export class PictureController {
  constructor(private readonly pictureService: PictureService) {}

  @Post()
  create(@Body() picture: Picture): Observable<Picture> {
    return this.pictureService.createPicture(picture);
  }

  // @Get("/:id")
  // async getPicture(@Param("id") id: string): Promise<string> {
  //   console.log("hello picture");
  //   const pictureData = await this.pictureService.getPicture(id);
  //   return pictureData;
  // }

  @Get("/upload-data")
  async uploadData(): Promise<boolean> {
    const data = await this.pictureService.uploadData();

    return data;
  }
}
