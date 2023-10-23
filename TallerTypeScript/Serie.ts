export class Serie {
  id: number;
  image: string;
  name: string;
  description: string;
  channel: string;
  url: string;
  seasons: number;
    constructor( id: number, name: string, channel: string, description: string,seasons: number,image: string,url:string) {

      this.id = id;
      this.image= image;
      this.name= name;
      this.description= description;
      this.channel= channel;
      this.seasons= seasons;
      this.url = url;


    }
  }
  