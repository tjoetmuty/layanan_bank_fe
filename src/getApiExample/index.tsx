import { useQuery } from "@tanstack/react-query"

const GetApiTanstack = () => {
  const query = useQuery({
    queryKey: ['json'],
    queryFn: async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      return res.json()
    }
  })
  console.log(query.data)
  return (
    <div>
      {query.data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default GetApiTanstack