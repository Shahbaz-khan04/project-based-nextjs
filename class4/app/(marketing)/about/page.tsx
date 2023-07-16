import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>About Page</h1>
      <Link href="/">Go back To Home</Link>
      <br />
      <Image src="/gear.png" alt="Image" width="130" height="130"/>
    </>
  );
}
