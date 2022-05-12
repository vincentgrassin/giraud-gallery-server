import { Album } from "../../album/models/album.interface";

export interface Picture {
  id: number;
  externalPublicId: string;
  externalId: string;
  name: string;
  description?: string;
  // tags: string[];
  isQuality: boolean;
  date?: string;
  createdAt: Date;
  album: Album;
  height: number;
  width: number;
}
