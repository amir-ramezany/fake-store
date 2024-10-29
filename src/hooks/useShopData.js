import Axios from "axios";
import { useEffect, useState } from "react";

export default function useShopData(apiAdress) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  //for infinite scroll component
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);
  async function fetchData() {
    try {
      setIsLoading(true);
      const res = await Axios.get(apiAdress);
      if (!res.status) throw new Error(res.statusText);
      setData(res.data);
      setIsLoading(false);
    } catch (e) {
      setIsError(`${e} something went wrong`);
      setIsLoading(false);
    }
  }
  const fetchMoreData = () => {
    Axios.get(apiAdress)
      .then((res) => {
        setData((prevItems) => [...prevItems, ...res.data]);
        res.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));
    setIndex((prevIndex) => prevIndex + 1);
  };
  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, isLoading, isError, fetchMoreData, hasMore, index };
}
