import Link from "next/link";

export default function Products({ params }: { params: { products: string } }) {
  return (
    <>
      <h1>Products Page</h1>
      <div>Product's name is: {params.products}</div>
      <br />
      <Link href="/">Home</Link>
    </>
  );
}
