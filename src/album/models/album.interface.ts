import { Picture } from "../../picture/models/picture.interface";

export interface Album {
  id: number;
  publicId: string;
  createdAt: Date;
  name: string;
  date: string;
  numberId: string;
  pictures?: Picture[];
  coverPicture: Picture;
}
