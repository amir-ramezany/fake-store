import CardItem from "../components/CardItem";
import Spinner from "../components/Spinner";
import useShopData from "../hooks/useShopData";
import InfiniteScroll from "react-infinite-scroll-component";
const HomePage = () => {
  const { data, isLoading, isError, fetchMoreData, hasMore } = useShopData(
    "https://fakestoreapi.com/products"
  );

  if (isLoading) return <Spinner />;
  if (isError)
    return <h1 className="text-red-500"> Sorry !! some error has occured </h1>;
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Spinner />}
    >
      <div className="container mx-auto px-5 py-4 flex flex-wrap justify-center gap-5">
        {data?.map((item) => (
          <CardItem key={item.id} {...item} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default HomePage;
