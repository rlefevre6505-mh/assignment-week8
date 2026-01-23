import Image from "next/image";
import myImage from "@/../public/assets/iron_maiden.jpg";

export default function HomePage() {
  return (
    <>
      <h2>Welcome to GigBlog</h2>

      <Image
        className="image"
        src={myImage}
        alt="a photo of a largew stadium rock concert"
        // width={600}
        // height={400}
        placeholder="blur"
      ></Image>
    </>
  );
}
