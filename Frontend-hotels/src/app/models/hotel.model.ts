export class Hotel {
  id: string;
  name: string;
  description:string;
  price: number;
  tags: string[] = [];
  imageURL:string;

  constructor(name: string, description: string, price: number, id?: string, imageURL?: string, tags?: string[]){
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.tags = tags || [];
    this.imageURL = imageURL || 'https://www.todaytourism.com/img/accommodation-type-img/hotel-default-img.jpg';
  }

  static getFromJSON(json: any) :Hotel{
    return new Hotel(json.name, json.description, json.price, json.id, json.imageURL, json.tags);
  }
}
