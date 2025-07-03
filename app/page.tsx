import { SimpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc)  {
    title,
      "currentSlug": slug.current,
      "titleImageUrl": titleImage.asset->url,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {

  const data: SimpleBlogCard[] = await getData();

  // console.log(data);

  return (
   <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {data.map((card: SimpleBlogCard) => (
          <div key={card.currentSlug} className="mb-5 p-[15px] max-w-[350px] cursor-pointer hover:bg-gray-200 ">
            <div className="relative w-[100%] h-[300px]">
              <Image
                src={card.titleImageUrl}
                alt={card.title}
                fill
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <h2 className="mt-[15px]">{card.title}</h2>
            <div className="mt-[15px] w-fit text-[14px] bg-myblue  text-white py-[10px] px-[20px] rounded-[12px] hover:bg-myblack ">
              Read More
            </div>
          </div>
        ))}
      </div>
   </div>
  );
}
