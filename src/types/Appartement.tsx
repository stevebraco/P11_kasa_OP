type Host = {
  name: string;
  picture: string;
}

type Appartement = {
 id: string;
 title: string;
 cover: string;
 pictures: string[];
 description: string;
 host: Host;
 rating: string;
 location: string;
 equipments: string[];
 tags: string[];
}

export default Appartement;
