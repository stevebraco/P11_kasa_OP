import axios from 'axios';
import { useEffect, useState } from 'react';
import Appartement from '../types/Appartement';

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
