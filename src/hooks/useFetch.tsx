import axios from 'axios';
import { useEffect, useState } from 'react';

type Host = {
  name: string;
  picture: string;
}
export type Appartement = {
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

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [appartements, setAppartements] = useState<Appartement[]>([]);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.get<Appartement[]>(url);
      setAppartements(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('./data.json');
  }, []);

  return { appartements, loading };
};

export default useFetch;
