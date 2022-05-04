import { Picture } from "../../picture/models/picture.interface";

export interface Album {
  id: number;
  createdAt: Date;
  name: string;
  date: string;
  technicalName: string;
  pictures: Picture[];
}
