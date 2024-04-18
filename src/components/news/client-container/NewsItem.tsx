import Image from "next/image";

const NewsItem = ({ item }) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
        <div>
            <span>{item.topic}</span>
            <span>{item.createdAt}</span>
        </div>
        <div className="w-full max-h-[400px] overflow-hidden rounded-2xl">
            <Image className="rounded-2xl" src={item.image} width={800} height={400} alt="newsimage"/>
        </div>
        <div className="text-accentBg max-w-[800px] flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="">{item.description}</p>
        </div>
    </div>
  )
}

export default NewsItem;