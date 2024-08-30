import { useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function Home({ children }) {
  // useEffect(() => {
  //   fetch("/api/hello")
  //     .then((res) => res.json())
  //     .then((res) => console.log("response =>", res));
  //   // .catch((err) => console.log(err));
  // }, []);

  return (
    <LayoutComponent metaTitle={"Home"}>
      <h1>Home</h1>
      {/* <Image src="/police.jpg" width={200} height={200} alt="Police" />
      <img src="/police.jpg" style={{ width: 200, height: 200 }} alt="Police" /> */}
    </LayoutComponent>
  );
}
