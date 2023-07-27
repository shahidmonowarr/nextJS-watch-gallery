import Products from "@/components/UI/Products";

// export const getData = async () => {
//   const res = await fetch("https://technet-server-nine.vercel.app/products", {
//     cache: "force-cache",
//   });
//   const data = await res.json();
//   return data;
// };

const HomePage = async () => {
  const res = await fetch("https://technet-server-nine.vercel.app/products", {
    cache: "force-cache",
    // next: {
    //   revalidate: 5,
    // },
  });
  const data = await res.json();

  // const data = await getData();
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {data?.data?.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
