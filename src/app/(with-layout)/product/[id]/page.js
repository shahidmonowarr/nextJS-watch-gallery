import ProductDetails from "@/components/UI/ProductDetails";

const ProductDetailPage = async ({ params }) => {
  const res = await fetch(
    `https://technet-server-nine.vercel.app/product/${params.id}`,
    {
      cache: "no-store", // no-store used for SSR || no-cache used for SSG || force-cache used for CSR
    }
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <ProductDetails product={data}></ProductDetails>
    </div>
  );
};

export default ProductDetailPage;
