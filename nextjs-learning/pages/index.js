import Layout from "@/layout";
import { useEffect } from "react";

export default function Home({ children }) {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => console.log("response =>", res));
    // .catch((err) => console.log(err));
  }, []);

  return (
    <Layout metaTitle={"Home"}>
      <h1>Home</h1>
    </Layout>
  );
}
