const fs = require("fs");
const path = require("path");
var cloudinary = require("cloudinary").v2;

cloudinary.config({});

const upload = async () => {
  const albumRoot = "C:/dev/perso/album/albums";
  const albums = await fs.promises.readdir(albumRoot);
  const cloudRootName = "giraud-images";

  // const result = await cloudinary.uploader.upload(
  //   "C:/dev/perso/album/albums/D/100.jpg",
  //   {
  //     public_id: `test/100`,
  //   }
  // );
  // console.log(result);
  for (const album of albums) {
    console.log("looking album", album, process.env.PORT);
    // create an album in table

    try {
      const files = await fs.promises.readdir(`${albumRoot}/${album}`);
      for (const file of files) {
        console.log("uploading", `${cloudRootName}/${album}/${file}`);

        // upload image to cloudinary
        const publicId = `${cloudRootName}/${album}/${file}`;
        // await cloudinary.uploader.upload(`${albumRoot}/${album}/${file}`, {
        //   public_id: publicId,
        // });

        // create entry in database with public_id and unique cloudinary id
      }
    } catch (e) {
      console.error("We've thrown! Whoops!", e);
    }
  }
};

upload();
