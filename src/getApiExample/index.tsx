import { useQuery } from "@tanstack/react-query";
import type { Todo } from "../types";

const GetApiTanstack = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["json"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    },
  });
  console.log(data);

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <div>
      {data?.map((item: Todo) => (
        <div key={item.id}>
          <img src={item.image} alt="" />
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
};

export default GetApiTanstack;
